import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-plant-table',
  templateUrl: './my-plant-table.component.html',
  styleUrls: ['./my-plant-table.component.css']
})
export class MyPlantTableComponent implements OnInit {
  _plots: Array<any> = [
    { 
      name: `Margot's Plot`,
      height: 6,
      width: 30,
      plants: [
        { 
          plantName: 'Tomatoes',
          plantsPerSquareFoot: 4,
          quanity: 8
        },
        { 
          plantName: 'Zucchini',
          plantsPerSquareFoot: 1,
          quanity: 2
        },
        { 
          plantName: 'Carrots',
          plantsPerSquareFoot: 10,
          quanity: 10
        },
        { 
          plantName: 'Broccoli',
          plantsPerSquareFoot: 1,
          quanity: 4
        },
        { 
          plantName: 'Lettuce',
          plantsPerSquareFoot: 4,
          quanity: 8
        },
        { 
          plantName: 'Brussel Sprouts',
          plantsPerSquareFoot: 2,
          quanity: 2
        },
        { 
          plantName: 'Bell Peppers',
          plantsPerSquareFoot: 4,
          quanity: 12
        }
      ]
    }, 
    { 
      name: `Flower Plot`,
      height: 6,
      width: 30,
      plants: [
        { 
          plantName: 'Tomatoes',
          plantsPerSquareFoot: 4,
          quanity: 8
        },
        { 
          plantName: 'Zucchini',
          plantsPerSquareFoot: 1,
          quanity: 2
        },
        { 
          plantName: 'Carrots',
          plantsPerSquareFoot: 10,
          quanity: 10
        },
        { 
          plantName: 'Broccoli',
          plantsPerSquareFoot: 1,
          quanity: 4
        },
        { 
          plantName: 'Lettuce',
          plantsPerSquareFoot: 4,
          quanity: 8
        },
        { 
          plantName: 'Brussel Sprouts',
          plantsPerSquareFoot: 2,
          quanity: 2
        },
        { 
          plantName: 'Bell Peppers',
          plantsPerSquareFoot: 4,
          quanity: 12
        }
      ]
    }, 
    { 
      name: `Garden Plot`,
      height: 6,
      width: 30,
      plants: [
        { 
          plantName: 'Tomatoes',
          plantsPerSquareFoot: 4,
          quanity: 8
        },
        { 
          plantName: 'Zucchini',
          plantsPerSquareFoot: 1,
          quanity: 2
        },
        { 
          plantName: 'Carrots',
          plantsPerSquareFoot: 10,
          quanity: 10
        },
        { 
          plantName: 'Broccoli',
          plantsPerSquareFoot: 1,
          quanity: 4
        },
        { 
          plantName: 'Lettuce',
          plantsPerSquareFoot: 4,
          quanity: 8
        },
        { 
          plantName: 'Brussel Sprouts',
          plantsPerSquareFoot: 2,
          quanity: 2
        },
        { 
          plantName: 'Bell Peppers',
          plantsPerSquareFoot: 4,
          quanity: 12
        }
      ] 
    }, 
    { 
      name: `Flowing Plot`,
      height: 6,
      width: 30,
      plants: [
        { 
          plantName: 'Tomatoes',
          plantsPerSquareFoot: 4,
          quanity: 8
        },
        { 
          plantName: 'Zucchini',
          plantsPerSquareFoot: 1,
          quanity: 2
        },
        { 
          plantName: 'Carrots',
          plantsPerSquareFoot: 10,
          quanity: 10
        },
        { 
          plantName: 'Broccoli',
          plantsPerSquareFoot: 1,
          quanity: 4
        },
        { 
          plantName: 'Lettuce',
          plantsPerSquareFoot: 4,
          quanity: 8
        },
        { 
          plantName: 'Brussel Sprouts',
          plantsPerSquareFoot: 2,
          quanity: 2
        },
        { 
          plantName: 'Bell Peppers',
          plantsPerSquareFoot: 4,
          quanity: 12
        }
      ]
    }
  ]
  plots: Array<any> = []

  constructor() { }

  ngOnInit() {
    // this.setSpace()
    this.plots = this._plots
  }

  applyFilter(filteredValue: string) : void {
    this.plots = this._plots.filter(filter => filter.name.trim().toLowerCase().includes(filteredValue.trim().toLowerCase()))
  }

  // setSpace() : void {
  //   this._plots.map(plot => {
  //     let used: number
  //     plot['spaceAvailable'] = plot.height * plot.width
  //     plot.plants.map(plant => {
  //       used += plant.quanity
  //       console.log(used)
  //     })
  //     plot['spaceUsed'] = used
  //   })
  //   // console.log(this._plots)
  // }
}