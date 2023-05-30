function machinecost() {
    num1 = document.getElementById("cost_machine").value;
    num2 = document.getElementById("no_machine").value;
    num3 = document.getElementById("work_machine").value;
    num4 = document.getElementById("life_machine").value;
    machinecost = num1 / num2 / num3 / num4;
    document.getElementById("result_machine").innerHTML = num1 / num2 / num3 / num4;
    document.getElementById("result_machine").style.visibility = "visible";
  
  
  }
  function mancost() {
    num1 = document.getElementById("salary_man").value;
    num2 = document.getElementById("no_man").value;
    num3 = document.getElementById("hours_man").value;
    mancost = num1 / num2 / num3;
    document.getElementById("result_man").innerHTML = num1 / num2 / num3;
    document.getElementById("result_man").style.visibility = "visible";
  }
  function powercost() {
    num1 = document.getElementById("standard_power").value;
    num2 = document.getElementById("kw_power").value;
    powercost = num1 * num2;
    document.getElementById("result_power").innerHTML = num1 * num2;
    document.getElementById("result_power").style.visibility = "visible";
  }
  function materialcost() {
    num1 = document.getElementById("total_material").value;
    num2 = document.getElementById("requested_material").value;
    materialcost = num1 / num2;
    document.getElementById("result_material").innerHTML = num1 / num2;
    document.getElementById("result_material").style.visibility = "visible";
  }
  function runningcost() {
  
    total = machinecost + mancost + powercost + materialcost;
    document.getElementById("result_running").innerHTML = machinecost + mancost + powercost + materialcost;
    document.getElementById("result_running").style.visibility = "visible";
  }
  function totalcost() {
    num2 = document.getElementById("quantity_total").value;
    document.getElementById("result_total").innerHTML = total * num2;
    document.getElementById("result_total").style.visibility = "visible";
  }
  
  