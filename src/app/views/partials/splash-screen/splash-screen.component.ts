import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SplashScreenService} from "../../../core/_base/layout/splash-screen.service";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  // Public proprties
  loaderLogo: string = '';
  loaderType: string = '';
  loaderMessage: string = '';

  @ViewChild('splashScreen', {static: true}) splashScreen: ElementRef = new ElementRef(null);

  /**
   * Component constructor
   *
   * @param el: ElementRef
   * @param layoutConfigService: LayoutConfigService
   * @param splashScreenService: SplachScreenService
   */
  constructor(
    private el: ElementRef,
    //private layoutConfigService: LayoutConfigService,
    private splashScreenService: SplashScreenService) {
  }

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * On init
   */
  ngOnInit() {
    // init splash screen, see loader option in layout.config.ts
    // loader: {
    //       enabled: true,
    //       type: 'spinner-logo',
    //       logo: './assets/media/loaders/cogs-2.gif',
    //       message: 'Espere por favor...',
    //     },
    // const loaderConfig = this.layoutConfigService.getConfig('loader');
    this.loaderLogo = './assets/media/loaders/cogs-2.gif';
    this.loaderType = 'spinner-logo';
    this.loaderMessage = 'Espere por favor...';

    this.splashScreenService.init(this.splashScreen);
  }

}
