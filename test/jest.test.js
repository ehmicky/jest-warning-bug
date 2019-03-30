describe('example', () => {
  it('example', () => {
    process.on('warning', error => {
      console.log('Caught warning', error)
    })
    // This is caught by the listener
    process.emit('warning', 'Warning one')
    // This uses the default Node.js `warning` listener instead (which prints on the console)
    process.emitWarning('Warning two')
  })
})
