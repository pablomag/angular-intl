import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default.component';
import { AnotherComponent } from './components/another.component';

export function HttpLoaderFactory(http: HttpClient)
{
	return new TranslateHttpLoader(http, './assets/i18n/locale.', '.json');
}

@NgModule(
{
	declarations:
	[
		AppComponent,
    	DefaultComponent,
    	AnotherComponent
	],
	imports:
	[
    	BrowserModule,
    	HttpClientModule,
    	TranslateModule.forRoot(
    	{
    		loader:
    		{
    			provide: TranslateLoader,
    			useFactory: HttpLoaderFactory,
    			deps: [HttpClient]
    		}
    	})
	],
	providers: [],
	bootstrap:
	[
		AppComponent
	]
})

export class AppModule { }