import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { myrentPage } from './myrent.page';

describe( 'myrentPage', () => {
  let component: myrentPage;
  let fixture: ComponentFixture<myrentPage>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [myrentPage],
      imports: [IonicModule.forRoot()]
    } ).compileComponents();

    fixture = TestBed.createComponent( myrentPage );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } ) );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
