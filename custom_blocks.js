// ***************** CUSTOM BLOCKS *********************************
Blockly.defineBlocksWithJsonArray([
    // Block to set robot position
    {
        "type": "set_position",
        "message0": "Set position (x,y,z) to: %1",
        "args0": [
            {
                "type": "input_value",
                "name": "position",
                "check": "Array"
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210,
        "tooltip": "Set desired position for robot",
        "helpUrl": ""
    },
    // Block to set robot pose (position + orientation)
    {
        "type": "set_pose",
            "message0": "set pose: position %1 orientation %2",
                "args0": [
                    {
                        "type": "input_value",
                        "name": "position",
                        "check": "Array"
                    },
                    {
                        "type": "input_value",
                        "name": "orientation",
                        "check": "Array",
                        "align": "RIGHT"
                    }
                ],
                    "inputsInline": false,
                        "previousStatement": null,
                            "nextStatement": null,
                                "colour": 300,
                                    "tooltip": "Set robot pose",
                                        "helpUrl": ""
    },
    // Block to set cartesian (linear) move from 2 points
    {
	  "type": "set_cartesian_move",
	  "message0": "MoveL:  %1 start:  position %2 rotation %3 end:   position %4 rotation %5",
	  "args0": [
		{
		  "type": "input_dummy"
		},
		{
		  "type": "input_value",
		  "name": "pos_1",
		  "check": "Array"
		},
		{
		  "type": "input_value",
		  "name": "or_1",
		  "check": "Array",
		  "align": "RIGHT"
		},
		{
		  "type": "input_value",
		  "name": "pos_2",
		  "check": "Array"
		},
		{
		  "type": "input_value",
		  "name": "or_2",
		  "check": "Array",
		  "align": "RIGHT"
		}
	  ],
	  "inputsInline": false,
	  "previousStatement": null,
	  "nextStatement": null,
	  "colour": 230,
	  "tooltip": "Make linear move from two points",
	  "helpUrl": ""
	},
    // Block to set robot joint state in degrees
    {
        "type": "set_joint_position_deg",
        "message0": "Set joint position %1 %2 %3 %4 %5 %6 %7",
        "args0": [
            {
                "type": "field_angle",
                "name": "j_1",
                "angle": 0
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_angle",
                "name": "j_2",
                "angle": 0
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_angle",
                "name": "j_3",
                "angle": 0
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_angle",
                "name": "j_4",
                "angle": 0
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 90,
        "tooltip": "Set joints position in degrees",
        "helpUrl": ""
    },
    // Block to set joint position in radians
    {
		"type": "set_joint_position_rad",
		"message0": "Set joints position in rad: %1 %2 %3 %4",
		"args0": [
		{
			"type": "input_value",
			"name": "j_1",
			"check": "Number"
		},
		{
			"type": "input_value",
			"name": "j_2",
			"check": "Number"
			
		},
		{
			"type": "input_value",
			"name": "j_3",
			"check": "Number"
		},
		{
			"type": "input_value",
			"name": "j_4",
			"check": "Number"
		}
		],
		"inputsInline": true,
		"previousStatement": null,
		"nextStatement": null,
		"colour": 30,
		"tooltip": "Set robot joint position in radians",
		"helpUrl": ""
	},
	// Block to get EEF position and orientation and save it to two variables 
	{
	  "type": "get_eef_pose",
	  "message0": "Get EEF position %1 %2 Get EEF orientation  %3",
	  "args0": [
		{
		  "type": "field_variable",
		  "name": "eef_pos",
		  "variable": "item"
		},
		{
		  "type": "input_dummy"
		},
		{
		  "type": "field_variable",
		  "name": "eef_or",
		  "variable": "item"
		}
	  ],
	  "inputsInline": false,
	  "previousStatement": null,
	  "nextStatement": null,
	  "colour": 210,
	  "tooltip": "Read robot's pose",
	  "helpUrl": ""
	},
	// Block to get joints position and save it to variable
	{
	  "type": "get_joints",
	  "message0": "Get joints position %1",
	  "args0": [
		{
		  "type": "field_variable",
		  "name": "joints",
		  "variable": "item"
		}
	  ],
	  "inputsInline": true,
	  "previousStatement": null,
	  "nextStatement": null,
	  "colour": 345,
	  "tooltip": "Get current joints position",
	  "helpUrl": ""
	}
]);  // END JSON EXTRACT (Do not delete this comment.)

// Set some global blockly parameters
Blockly.FieldAngle.WRAP = 180;
Blockly.FieldAngle.ROUND = 1;

// ************************* BLOCK Functions JavaScript ************************* //
Blockly.JavaScript['set_position'] = function (block) {
	// Get fields 
    var value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);
	// Set code to be executed
    var code = 'set_eef_position(' + value_position + '); \n';
    return code
};

Blockly.JavaScript['set_pose'] = function (block) {
	// Get fields
	var value_position = Blockly.JavaScript.valueToCode(block, 'position', Blockly.JavaScript.ORDER_ATOMIC);
    var value_orientation = Blockly.JavaScript.valueToCode(block, 'orientation', Blockly.JavaScript.ORDER_ATOMIC);
    // Set code to be executed
    var code = 'set_eef_pose(' + value_position + ','+ value_orientation + '); \n';
    return code
};

Blockly.JavaScript['set_joint_position_deg'] = function (block) {
	// Get fields
    var angle_j_1 = block.getFieldValue('j_1') * Math.PI / 180.0;
    var angle_j_2 = block.getFieldValue('j_2') * Math.PI / 180.0;
    var angle_j_3 = block.getFieldValue('j_3') * Math.PI / 180.0;
    var angle_j_4 = block.getFieldValue('j_4') * Math.PI / 180.0;
	// Set code to be executed
	var value_position = [angle_j_1.toFixed(5),angle_j_2.toFixed(5),angle_j_3.toFixed(5),angle_j_4.toFixed(5)];
    var code = 'set_joints_position([' + value_position + ']); \n';
    return code
};

Blockly.JavaScript['set_joint_position_rad'] = function(block) {
	// Get fields
	var number_j_1 = Blockly.JavaScript.valueToCode(block,'j_1', Blockly.JavaScript.ORDER_ATOMIC);
	var number_j_2 = Blockly.JavaScript.valueToCode(block,'j_2', Blockly.JavaScript.ORDER_ATOMIC);
	var number_j_3 = Blockly.JavaScript.valueToCode(block,'j_3', Blockly.JavaScript.ORDER_ATOMIC);
	var number_j_4 = Blockly.JavaScript.valueToCode(block,'j_4', Blockly.JavaScript.ORDER_ATOMIC);
	// Set code to be executed
	var value_position = [number_j_1,number_j_2,number_j_3,number_j_4];
    var code = 'set_joints_position([' + value_position + ']); \n';
    return code
};

Blockly.JavaScript['set_cartesian_move'] = function(block) {
  var value_pos_1 = Blockly.JavaScript.valueToCode(block, 'pos_1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_or_1 = Blockly.JavaScript.valueToCode(block, 'or_1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pos_2 = Blockly.JavaScript.valueToCode(block, 'pos_2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_or_2 = Blockly.JavaScript.valueToCode(block, 'or_2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'set_cartesian_move(' + value_pos_1 + ',' + value_or_1 + ',' + value_pos_2 + ',' + value_or_2 +'); \n';
  return code;
};

Blockly.JavaScript['get_eef_pose'] = function(block) {
	// Get fields
	var variable_eef_pos = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('eef_pos'), Blockly.Variables.NAME_TYPE);
	var variable_eef_or = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('eef_or'), Blockly.Variables.NAME_TYPE);
	// Set code to be executed
	var code = variable_eef_pos + ' = get_eef_position(); \n' + variable_eef_or + ' = get_eef_orientation(); \n';
	return code;
};

Blockly.JavaScript['get_joints'] = function(block) {
	// Get fields
	var variable_joints = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('joints'), Blockly.Variables.NAME_TYPE);
	// Set code to be executed
	var code = variable_joints + ' = get_joints_position(); \n';
	return code;
};

// ************************* Functions ************************* //
//Publish full message on topic: '/gui/command'
function set_eef_pose(position, orientation) {
	// set type of message
	var type = 3;
	// safety check of input data
	var flag = check_input(type, position, orientation);
	if (flag == false) {
		var command_msg = new ROSLIB.Message({
			command_type : type,
			pose : {
				position : [position[0],position[1],position[2]],
				orientation : [orientation[0], orientation[1], orientation[2], orientation[3]]
			}
		});
		// Publish to ros 
		command_pub.publish(command_msg);
	}
	else {
		console.log("Wrong input");
	}
};

function set_cartesian_move(position_start, orientation_start, position_end, orientation_end) {
	// set type of message
	var type = 5;
	// safety check of input data
	var flag_1 = check_input(type, position_start, orientation_start);
	var flag_2 = check_input(type, position_end, orientation_end);
	var flag = flag_1 || flag_2;
	if (flag == false) {
		var point_start = new ROSLIB.Message({
			position : [position_start[0],position_start[1],position_start[2]],
			orientation : [orientation_start[0], orientation_start[1], orientation_start[2], orientation_start[3]]
		});
		var point_end = new ROSLIB.Message({
			position : [position_end[0],position_end[1],position_end[2]],
			orientation : [orientation_end[0], orientation_end[1], orientation_end[2], orientation_end[3]]
		});
		var command_msg = new ROSLIB.Message({
			command_type : type,
			waypoints : [point_start, point_end]
		});
		// Publish to ros 
		command_pub.publish(command_msg);
	}
	else {
		console.log("Wrong input");
	}
};

//Publish position and type message on topic: '/gui/command'
function set_eef_position(position) {
	// set type of message
	var type = 2;
	// safety check of input data
	var flag = check_input(type, position, [0,0,0,0]);
	if (flag == false) {
		var command_msg = new ROSLIB.Message({
			command_type : type,
			pose : {
				position : [position[0],position[1],position[2]]
			}
		});
		// Publish to ros
		command_pub.publish(command_msg);
	}
	else {
		console.log("Wrong input");
	}
};

//Publish joint position and type message on topic: '/gui/command'
function set_joints_position(position) {
	// set type of message
	var type = 1;
	// safety check of input data
	var flag = check_input(type, position, [0,0,0,0]);
	if (flag == false) {
		var command_msg = new ROSLIB.Message({
			command_type : type,
			joints : [position[0],position[1],position[2],position[3]]
		});
		// Publish to ros
		command_pub.publish(command_msg);
	}
	else {
		console.log("Wrong input");
	}
};

// Check if input data is valid
function check_input(type, position, orientation) {
	// Set flag to 1.0 if input error
	var flag = 0;
	// Check if position consists of numbers only
	var position_numbers_only = position.every(function (i) {
    	return (typeof i == 'number');
    });
    // Check if orientation consists of numbers only
    var orientation_numbers_only = orientation.every(function (j) {
    	return (typeof j == 'number');
    });
    // If not true return flag = 1
	if (!position_numbers_only | !orientation_numbers_only) {
		flag = 1;
		return flag;	
	}
	// Check length of input values
	switch(type) {
		case 1:
			if (position.length != 4) flag = 1;
			break;
		case 2:
			if (position.length != 3) flag = 1;
			break;
		case 3:
			if (position.length != 3 | orientation.length != 4) flag = 1;
			break;
		case 5:
			if (position.length != 3 | orientation.length != 4) flag = 1;
			break;
		// Wrong 
		default:
			console.log("Wrong input data type");
			flag = 1;
		}
	return flag
};
// get eef position
function get_eef_position() {
	return eef_position;
};
// get eef rotation
function get_eef_orientation() {
	return eef_orientation;
};
// get joints position
function get_joints_position() {
	return joint_values;
};
