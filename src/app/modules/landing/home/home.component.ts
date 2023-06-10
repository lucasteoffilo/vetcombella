
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector: 'landing-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent implements OnInit, OnDestroy {

    public whatsapp;
    private _unsubscribeAll: Subject<any> = new Subject();

    /**
     * Constructor
     */
    constructor() {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------


    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    sendWhatsapp() {
        let url = `https://api.whatsapp.com/send/?phone=5521997192888&text=${this.whatsapp.replace(/ /g, "+")}&type=phone_number&app_absent=0`;
        window.open(url, "_blank");
    }
}
