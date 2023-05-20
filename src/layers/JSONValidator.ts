export type TMessageSeverity = "success" | "warning" | "error";
export interface IJSONValidator {
    fieldRef: HTMLTextAreaElement | HTMLInputElement | null;
    boolean: boolean;
    rawJSON: string;
    message: string;
    severity: TMessageSeverity;
    resultJSON: Object;
}

export class JSONValidator {
    constructor(
        public fieldRef: IJSONValidator["fieldRef"] = null,
        public isInitialized: IJSONValidator["boolean"] = false,
        public resultJSON: IJSONValidator["resultJSON"] = {},
        public message: IJSONValidator["message"] = '',
        public severity: IJSONValidator["severity"] = 'error',
        public isValid: IJSONValidator["boolean"] = false,
    ) {
    }

    reload() {
        this.severity = 'error'
        this.message = `Unexpected error`
        this.isValid = false
    }
    validate(rawJSON: IJSONValidator["rawJSON"]): boolean {
        // nothing to validate, early return
        if (!rawJSON) return false

        // clear
        this.reload()

        // check teh minLength
        if (rawJSON.length >= 3) {
            // try to parse json
            try {
                // success
                this.resultJSON = JSON.parse(rawJSON)
                this.isValid = true;
                this.message = `Successfully parsed teh JSON!`
                this.severity = 'success'
                // due to task, output result object into console
                console.log(this.resultJSON);
            } catch (error) {
                // error
                this.message = error
                this.severity = 'error'
                // debug
                console.error(`Can't parse given json, reason: ${error},\n input value is ${rawJSON}`)
            }
        } else {
            // warning
            this.message = `Not enough data length to validate`
            this.severity = 'warning'
        }
        return false
    }

}