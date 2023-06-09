import { Component, HostListener, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderService } from 'src/app/services/provider/provider.service';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  page = 1;
  isLoading = false;
  isLoadingView = false;
  dataAvailable = true
  swapi$: any
  data$: any
  url: string
  searchForm: FormGroup;
  information: any

  constructor(
    private provider: ProviderService

  ) {
    this.searchForm = new FormGroup({
      search: new FormControl('')
    })
    this.url = ''
    this.swapi$ = false

  }

  ngOnInit() {

  }

  //Method to update the list with the scroll event
  onScroll(event:any) {

    const element = event.target
    const scrollHeight = element.scrollHeight
    const scrollTop = element.scrollTop
    const clientHeight = element.clientHeight

    if(scrollTop + clientHeight === scrollHeight && !this.isLoading && this.dataAvailable ){
      //console.log('Loading....')
      this.page++;
      this.scrollData()
    }
  }

  //Method to update the people selection
  getSelection(url: string) {
    this.url = url
  }

  //Method to get people based on search criteria or not
  async onReturn() {
    this.isLoading = true;
    this.page = 1;
    this.dataAvailable = true
    this.information = false
    if (this.searchForm.value.search == '') {
      console.log("Enter press")
      this.swapi$ =  await this.provider.getSWAPI(this.page)
    } else if (this.searchForm.value.search != '') {
      console.log("Botton press")
      this.swapi$ = await this.provider.getSWAPISEARCH(this.searchForm.value.search,this.page)
    }
    if (Array.isArray(this.swapi$) && this.swapi$.length > 0) {
      //action
    } else {
      //console.log('No data')
      this.swapi$ = await false
    }
    await console.log(this.searchForm.value.search)
    this.isLoading = await false;

  }

 //Method to get people based on search criteria or not, without cleaning the object
  async scrollData() {
    this.isLoading = true;
    this.information = false
    if (this.searchForm.value.search == '') {
      this.data$ =  await this.provider.getSWAPI(this.page) 
    } else if (this.searchForm.value.search != '') {
      this.data$ = await  this.provider.getSWAPISEARCH(this.searchForm.value.search,this.page)
    }

    if (this.data$) {
      this.swapi$ =  await [...this.swapi$, ...this.data$] 
    } else {
     // console.log('No data')
      this.dataAvailable = await false
    }
   
    this.isLoading = await false;

  }

  ////// View Button action 
  async showInformation(url: string) {
    this.isLoadingView = true;
    this.information = await this.provider.getSWAPIID(url)
    this.isLoadingView = await false;
  }


}
