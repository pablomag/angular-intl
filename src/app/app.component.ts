import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component
({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [TranslateService]
})

export class AppComponent
{
	public name = "World!";
	param = {value: this.name};

	incode = {value: 'BODY._INCODE_'};

	constructor
	(
		private _translateService: TranslateService
	)
	{
		_translateService.setDefaultLang('en');
		_translateService.use('en');
	}

	switchLanguage()
	{
		if (this._translateService.getDefaultLang() == 'en')
		{
			this._translateService.setDefaultLang('es');
			this._translateService.use('es');
		} else {

			this._translateService.setDefaultLang('en');
			this._translateService.use('en');
		}
	}
}
