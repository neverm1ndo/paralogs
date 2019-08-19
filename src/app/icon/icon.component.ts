import { Component, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import "../../assets/svg/weapon.svg";
import "../../assets/svg/rj45.svg";
import "../../assets/svg/spawn.svg";
import "../../assets/svg/prep.svg";
import "../../assets/svg/skull.svg";
import "../../assets/svg/brush.svg";
import "../../assets/svg/lamp.svg";
import "../../assets/svg/logo.svg";
import { UniqueIDService } from '../unicue-id.service';

@Component({
    selector: "app-icon",
    inputs: [ "type", "title" ],
    host: {
        "[attr.title]": "ariaTitle",
        "[attr.aria-hidden]": "ariaHidden",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "role": "img"
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./icon.component.html",
    styleUrls: [ "./icon.component.less" ],
})

export class IconComponent implements OnChanges {

  public ariaHidden: true | null;
    public ariaLabelledBy: string | null;
    public ariaTitle: string | null;
    public title!: string;
    public type!: string;

    private uniqueIDService: UniqueIDService;

    constructor( uniqueIDService: UniqueIDService ) {

        this.uniqueIDService = uniqueIDService;

        this.ariaHidden = true;
        this.ariaLabelledBy = null;
        this.ariaTitle = null;

    }
    public ngOnChanges() : void {
        if ( this.title ) {
            this.ariaHidden = null;
            this.ariaLabelledBy = ( this.ariaLabelledBy || this.uniqueIDService.next() );
            this.ariaTitle = this.title;

        } else {
            this.ariaHidden = true;
            this.ariaLabelledBy = null;
            this.ariaTitle = null;
        }
    }
}
