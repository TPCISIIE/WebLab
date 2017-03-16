/**
 * This file represents the child of the process, it runs a VM to execute the algorithm
 */
const {NodeVM, VMScript} = require('vm2')
const perfy = require('perfy')
const util = require('util')
const VM = require('vm')
let virtualMachine = new NodeVM({
  wrapper: 'none',
  require: {
    timeout: 1000,
    external: true,
    mock: {
      fs: {
        readFileSync () { return 'Nice try dude!' }
      }
    }
  }
})
process.on('message', (m) => {
  if (m.algorithm != null && m.iteration != null) {
    let result = 'Undefined'
    let iterations = []
    let time = []
    for (let i = 0; i < parseInt(m.iteration); i++) {
      try {
        perfy.start('rendering')
        const sandbox = {
          animal: 'cat',
          count: 2
        }

        const script = new VM.Script(m.algorithm)

        const context = new VM.createContext(sandbox)

        script.runInContext(context)
        iterations.push(result)
        let executionTime = perfy.end('rendering')
        time.push(executionTime.milliseconds)
        process.send({ // To get previews
          preview: result,
          nthIteration: i
        })
        process.send({
          result: util.inspect(sandbox)
        })
      } catch (error) {
        process.send({
          error: error.toString(),
          nthIteration: i
        })
        return
      }
    }
  } else {
    process.send({ result: 'Error, did not get all the parameters' })
  }
})
