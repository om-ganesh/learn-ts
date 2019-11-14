namespace Membership {
    export function PrintName(name:string) : void {
        console.log(name);
    }

    export namespace Manager {
        export function AddMember(name: string) : string {
            return name + ' Member added.';
        }
    }
}
