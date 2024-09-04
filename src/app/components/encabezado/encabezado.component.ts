import { Component, input, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent  implements OnInit {

  constructor() { }
  @Input() titulo: string = '';

  ngOnInit() {}

}
