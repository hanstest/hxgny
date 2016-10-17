import { BrowserPolicy } from 'meteor/browser-policy-common'

BrowserPolicy.content.allowOriginForAll('cdnjs.cloudflare.com')
BrowserPolicy.content.allowOriginForAll('semantic-ui.com') // TODO For testing only
BrowserPolicy.content.allowOriginForAll('*.googleapis.com')
BrowserPolicy.content.allowOriginForAll('*.gstatic.com')
BrowserPolicy.content.allowFontDataUrl('fonts.gstatic.com')
BrowserPolicy.content.allowFontDataUrl('fonts.googleapis.com')
