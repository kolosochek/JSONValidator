import {JSONValidator} from "./JSONValidator";

describe("JSONValidator class test", () => {

    // make a new class instance
    const validator = new JSONValidator()
    const shortJSON = `{J`
    const invalidJSON = `{"somevar": "somevalue", "anothervar": "anothervalue"`
    const validJSON = `
    {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}
`

    it(`Can create new JSONValidator class instance`, () => {
        expect(typeof validator).toBe('object')
    })

    it(`Empty string to validate`, () => {
        expect(validator.validate('')).toBe(false)
    })

    it(`Can parse valid JSON`, () => {
        validator.validate(validJSON)
        expect(validator.isValid).toBe(true)
    })

    it(`Can't parse invalid JSON`, () => {
        validator.validate(invalidJSON)
        expect(validator.severity).toBe('error')
    })

    it(`Can't parse short string that is too short`, () => {
        validator.validate(shortJSON)
        expect(validator.severity).toBe('warning')
    })
})