function ElectricalAppliance (name){
    this.name=name
  }
  
  ElectricalAppliance.prototype.description=function(manufacturer, power, turn){
      console.log(`The ${this.name} is manufacturied by ${manufacturer}. Power Consumption 
      of the ${this.name} is ${power} W. The ${this.name} is switched ${turn}.`)
  }
  
  
  function PersonalComputer(name,display){
    this.display = display,
    this.name = name
  }
  
  PersonalComputer.prototype = new ElectricalAppliance()
  
  PersonalComputer.prototype.description=function(manufacturer, power, turn){
      console.log(`The ${this.name} is manufacturied by ${manufacturer}. Power Consumption 
      of the ${this.name} is ${power} W. The ${this.name} is switched ${turn}. Has a monitor ${this.display} inshes`)
  }
  
  
  const iron = new ElectricalAppliance('iron');
  const lamp = new ElectricalAppliance('lamp');
  const mac = new PersonalComputer('Mackintosh', '12');
  
  iron.description('Tefal','650','on');
  lamp.description('Bork','800','Led');
  mac.description('Apple','2500','off');