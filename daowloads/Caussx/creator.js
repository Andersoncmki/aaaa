let handler = function (m) {
  this.sendContact(m.chat, '6993553851', 'Anderson', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
