export class Tag {
    static readonly ANGULAR = new Tag('Angular','red')
    static readonly PYTHON = new Tag('Python','blue')
    static readonly TYPESCRIPT = new Tag('TypeScript','teal')
    static readonly JAVA = new Tag('Java','brown')
    static readonly JAVASCRIPT = new Tag('JavaScript','orange')
    static readonly NODEJS = new Tag('NodeJS','pink')
    static readonly ASPNET = new Tag('ASP.NET','purple')
    static readonly REACT = new Tag('React','lightblue')
    static readonly CSHARP = new Tag('C#','green')

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}