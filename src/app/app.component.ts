import { Component, OnInit,  VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){




  }

}


/*

$(function(){
	plotConceptMap();
});
function plotConceptMap()
{
	d3.json("metadata.json", function(dataJson) {
		var plot = new ConceptMap("graph", "graph-info", dataJson);
	});
}

*/