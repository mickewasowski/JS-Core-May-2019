class Computer {
    constructor(ramMemory, cpuGHz, hddMemory){
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace){
        let spaceLeft = +this.hddMemory - +requiredSpace;
        if (spaceLeft < 0) {
            throw new Error('There is not enough space on the hard drive');
        }

        let programObject = {name: name, requiredSpace: requiredSpace};

        this.installedPrograms.push(programObject);

        this.hddMemory -= requiredSpace;

        return programObject;
    }

    uninstallAProgram(name){
        for (const program of this.installedPrograms) {
            if (program.name === name) {
                let index = this.installedPrograms.indexOf(program);
                let space = program.requiredSpace;
                this.installedPrograms.splice(index,1);
                this.hddMemory += +space;

                return this.installedPrograms;
            }
        }

        throw new Error('Control panel is not responding');
    }

    openAProgram(name){
        let bool = false;
        for (const prog of this.installedPrograms) {
            if (prog.name === name) {
                bool = true;
            }
        }

        if (!bool) {
            throw new Error(`The ${name} is not recognized`);
        }
        
    }
}

let myClass = new Computer(16,2.3,5000);

console.log(myClass.installAProgram('some', 1000));
console.log(myClass.installAProgram('diff', 100));
console.log(myClass.installAProgram('sad', 100));

console.log(myClass.uninstallAProgram('some'));