import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-alert-sample',
  templateUrl: './alert-sample.page.html',
  styleUrls: ['./alert-sample.page.scss'],
})
export class AlertSamplePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  exibeToast(){
    const showHelloToast = async () => {
      await Toast.show({
        text: 'Alerta Geral!',
      });
    };
  }

  exibeAction(){

  }

}
