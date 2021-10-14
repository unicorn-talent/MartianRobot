var Position = require("./position.js");

function Robot(grid) {
	var position = new Position();
	var clockRotate = {"N":"E", "E":"S", "S":"W", "W":"N"};
	var antiClockRotate = {"N":"W", "W":"S", "S":"E", "E":"N"};

	this.setPosition = function(startPosition) {
		startPosition = startPosition.split(" ");
		position.x = startPosition[0];
		position.y = startPosition[1];
		position.orientation = startPosition["2"];
	};

	this.getPosition = function() {
		return position;
	}

	this.move = function (instructions) {
		for(var i = 0; i < instructions.length; i++) {
			if(this.isLost()) 
				break;

			var instruction = instructions[i];

			if(isLeftTurn(instruction)){this.turnLeft();}
			if(isRightTurn(instruction)){this.turnRight();}
			if(isForwardMovement(instruction)){this.moveForward();}
		}

		return position.toString();
	}

	this.moveForward = function () {
		var startPosition = position.toString();

		if(this.isLost() || grid.hasForbidden(startPosition))
			return;

		if(position.orientation == "N") {
			position.y++;
		}

		if(position.orientation == "S") {
			position.y--;
		}

		if(position.orientation == "E") {
			position.x++;
		}

		if(position.orientation == "W") {
			position.x--;
		}

		if(position.isOff(grid))
			grid.addForbidden(startPosition);


	};



	isLeftTurn = function (instruction) {
		return instruction == "L";
	};

	isRightTurn = function (instruction) {
		return instruction == "R";
	};

	isForwardMovement = function (instruction) {
		return instruction == "F";
	};

	this.isLost = function () {
		return position.lost;
	};

	this.turnLeft = function() {
		position.orientation = antiClockRotate[position.orientation];
	};

	this.turnRight = function () {
		position.orientation = clockRotate[position.orientation];
	};

}

module.exports = Robot;