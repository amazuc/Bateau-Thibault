import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Information } from 'src/app/interfaces/information';
import { InformationService } from 'src/app/services/information/information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent  implements OnInit {
  @Input() data: string ="";
  information: Information={nom: "",image: "",description: "", type:""}
  tableauDescription:string[] =[]

  constructor(private router: Router, private informationService: InformationService) { }

  ngOnInit() {
    
    this.initInformation()
  
  }

  async initInformation(){
    await this.informationService.getInformation(this.data).subscribe(item =>{
      this.information = item
      this.tableauDescription = this.information.description.trim().split('\n');
    })
    
  }

  onGoBack(){
    if(this.information.type === "bateau")
      this.router.navigate(['/bateaux'], { replaceUrl: true })

    if(this.information.type === "restaurant")
      this.router.navigate(['/restaurants']), { replaceUrl: true }

    if(this.information.type === "recette")
      this.router.navigate(['/recettes'], { replaceUrl: true })

    }

}
