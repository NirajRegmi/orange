import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addrentPage } from './addrent.page';

describe( 'addrentPage', () => {
  let component: addrentPage;
  let fixture: ComponentFixture<addrentPage>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [addrentPage],
      imports: [IonicModule.forRoot()]
    } ).compileComponents();

    fixture = TestBed.createComponent( addrentPage );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } ) );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
