import Events from 'events'
import CliConfig from './src/cliConfig.js'
import TerminalController from './src/terminalController.js'

const [nodePath, filePath, ...commands] = process.argv

const config = CliConfig.paserArguments(commands)
console.log('config', config)

const componentEmitter = new Events()

// const controller = new TerminalController()
// await controller.initializeTable(componentEmitter)