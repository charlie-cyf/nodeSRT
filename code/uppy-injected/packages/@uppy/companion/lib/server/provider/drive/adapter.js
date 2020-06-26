const SRTlib = require('SRT-util');
const querystring = require('querystring');
exports.getUsername = data => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);
    for (const item of data.files) {
        if (item.ownedByMe && item.permissions) {
            for (const permission of item.permissions) {
                if (permission.role === 'owner') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
                    return permission.emailAddress;
                }
            }
        }
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
};
exports.isFolder = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
    return item.mimeType === 'application/vnd.google-apps.folder' || exports.isSharedDrive(item);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
};
exports.getItemSize = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
    return parseInt(item.size, 10);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
};
exports.getItemIcon = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);
    if (exports.isSharedDrive(item)) {
        const size = '=w16-h16-n';
        const sizeParamRegex = /=[-whncsp0-9]*$/;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
        return item.backgroundImageLink.match(sizeParamRegex) ? item.backgroundImageLink.replace(sizeParamRegex, size) : `${item.backgroundImageLink}${size}`;
    }
    if (item.thumbnailLink && !item.mimeType.startsWith('application/vnd.google')) {
        const smallerThumbnailLink = item.thumbnailLink.replace('s220', 's40');
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
        return smallerThumbnailLink;
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
    return item.iconLink;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
};
exports.getItemSubList = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);
    const allowedGSuiteTypes = ['application/vnd.google-apps.document', 'application/vnd.google-apps.drawing', 'application/vnd.google-apps.script', 'application/vnd.google-apps.spreadsheet', 'application/vnd.google-apps.presentation'];
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');
    return item.files.filter(i => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
        return exports.isFolder(i) || !exports.isGsuiteFile(i.mimeType) || allowedGSuiteTypes.includes(i.mimeType);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');
};
exports.getItemName = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);
    const extensionMaps = {
        'application/vnd.google-apps.document': '.docx',
        'application/vnd.google-apps.drawing': '.png',
        'application/vnd.google-apps.script': '.json',
        'application/vnd.google-apps.spreadsheet': '.xlsx',
        'application/vnd.google-apps.presentation': '.ppt'
    };
    const extension = extensionMaps[item.mimeType];
    if (extension && item.name && !item.name.endsWith(extension)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');
        return item.name + extension;
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');
    return item.name ? item.name : '/';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');
};
exports.getMimeType = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);
    if (exports.isGsuiteFile(item.mimeType)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
        return exports.getGsuiteExportType(item.mimeType);
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
    return item.mimeType;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
};
exports.getItemId = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');
    return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');
};
exports.getItemRequestPath = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
    return item.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
};
exports.getItemModifiedDate = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');
    return item.modifiedTime;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');
};
exports.getItemThumbnailUrl = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');
    return item.thumbnailLink;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');
};
exports.isSharedDrive = item => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');
    return item.kind === 'drive#drive';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');
};
exports.getNextPagePath = (data, currentQuery, currentPath) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":3},`);
    if (!data.nextPageToken) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');
        return null;
    }
    const query = Object.assign({}, currentQuery, {
        cursor: data.nextPageToken
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');
    return `${currentPath}?${querystring.stringify(query)}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');
};
exports.isGsuiteFile = mimeType => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey15","fileName":"${__filename}","paramsNumber":1},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');
    return mimeType && mimeType.startsWith('application/vnd.google');
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');
};
exports.getGsuiteExportType = mimeType => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey16","fileName":"${__filename}","paramsNumber":1},`);
    const typeMaps = {
        'application/vnd.google-apps.document': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.google-apps.drawing': 'image/png',
        'application/vnd.google-apps.script': 'application/vnd.google-apps.script+json',
        'application/vnd.google-apps.spreadsheet': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.google-apps.presentation': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');
    return typeMaps[mimeType] || 'application/pdf';
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');
};
