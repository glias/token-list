const Ajv = require("ajv").default
const ropstenTokenList = require('./tokens/ethereum/ropsten.json')
const arrgonTokenList = require('./tokens/nervos/aggron.json')
const nervosSchema = require('./tokens/nervos/schema.json')
const ethSchema = require('./tokens/ethereum/schema.json')

const ajv = new Ajv()

const compileSchema = (schema) => {
  const validate = ajv.compile(schema)

  return (data) => {
    if (!validate(data)) {
      for (const err of validate.errors) {
        console.error(err)
      }
      throw new Error('Validtion failed')
    }
  }
}

describe('Token Schema', () => {
  describe('Nervos Schema', () => {
    const validate = compileSchema(nervosSchema)

    it('Aggron', () => {
      validate(arrgonTokenList)
    })
  })

  describe('Ethereum Schema', () => {
    const validate = compileSchema(ethSchema)

    it('Ropsten', () => {
      validate(ropstenTokenList)
    })
  })
})
