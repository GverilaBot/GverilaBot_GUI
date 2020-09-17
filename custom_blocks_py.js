// ************************* BLOCK Functions JavaScript ************************* //
Blockly.Python['set_position'] = function (block) {
	// Get fields 
    var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
	// Set code to be executed
    var code = 'set_eef_position(' + value_position + ') \n';
    return code
};

Blockly.Python['set_pose'] = function (block) {
	// Get fields
	var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
    var value_orientation = Blockly.Python.valueToCode(block, 'orientation', Blockly.Python.ORDER_ATOMIC);
    // Set code to be executed
    var code = 'set_eef_pose(' + value_position + ','+ value_orientation + ') \n';
    return code
};

Blockly.Python['set_joint_position_deg'] = function (block) {
	// Get fields
    var angle_j_1 = block.getFieldValue('j_1') * Math.PI / 180.0;
    var angle_j_2 = block.getFieldValue('j_2') * Math.PI / 180.0;
    var angle_j_3 = block.getFieldValue('j_3') * Math.PI / 180.0;
    var angle_j_4 = block.getFieldValue('j_4') * Math.PI / 180.0;
	// Set code to be executed
	var value_position = [angle_j_1.toFixed(5),angle_j_2.toFixed(5),angle_j_3.toFixed(5),angle_j_4.toFixed(5)];
    var code = 'set_joints_position([' + value_position + ']) \n';
    return code
};

Blockly.Python['set_joint_position_rad'] = function(block) {
	// Get fields
	var number_j_1 = block.getFieldValue('j_1');
	var number_j_2 = block.getFieldValue('j_2');
	var number_j_3 = block.getFieldValue('j_3');
	var number_j_4 = block.getFieldValue('j_4');
	// Set code to be executed
	var value_position = [number_j_1,number_j_2,number_j_3,number_j_4];
    var code = 'set_joints_position([' + value_position + ']) \n';
    return code
};

Blockly.Python['set_cartesian_move'] = function(block) {
  var value_pos_1 = Blockly.Python.valueToCode(block, 'pos_1', Blockly.Python.ORDER_ATOMIC);
  var value_or_1 = Blockly.Python.valueToCode(block, 'or_1', Blockly.Python.ORDER_ATOMIC);
  var value_pos_2 = Blockly.Python.valueToCode(block, 'pos_2', Blockly.Python.ORDER_ATOMIC);
  var value_or_2 = Blockly.Python.valueToCode(block, 'or_2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'set_cartesian_move(' + value_pos_1 + ',' + value_or_1 + ',' + value_pos_2 + ',' + value_or_2 +') \n';
  return code;
};

Blockly.Python['get_eef_pose'] = function(block) {
	// Get fields
	var variable_eef_pos = Blockly.Python.variableDB_.getName(block.getFieldValue('eef_pos'), Blockly.Variables.NAME_TYPE);
	var variable_eef_or = Blockly.Python.variableDB_.getName(block.getFieldValue('eef_or'), Blockly.Variables.NAME_TYPE);
	// Set code to be executed
	var code = variable_eef_pos + ' = get_eef_position() \n' + variable_eef_or + ' = get_eef_orientation() \n';
	return code;
};

Blockly.Python['get_joints'] = function(block) {
	// Get fields
	var variable_joints = Blockly.Python.variableDB_.getName(block.getFieldValue('joints'), Blockly.Variables.NAME_TYPE);
	// Set code to be executed
	var code = variable_joints + ' = get_joints_position() \n';
	return code;
};



