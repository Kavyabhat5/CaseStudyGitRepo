/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddWorkOutComponent } from './add-work-out.component';

let component: AddWorkOutComponent;
let fixture: ComponentFixture<AddWorkOutComponent>;

describe('AddWorkOut component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddWorkOutComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddWorkOutComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});