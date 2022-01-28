import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class WindowRefService {
    get nativeWindow(): ICustomWindow {
        return getWindow();
    }
}


export interface ICustomWindow extends Window {
    __custom_global_stuff: string;
}

function getWindow(): any {
    return window;
}
