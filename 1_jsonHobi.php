<?php
function bioToJson($name,$address,$hobbies,$is_married,$highSchool,$univ,$skills,$scores){
	$arr = array(
		'name' => $name,
		'address' => $address,
		'hobbies' => $hobbies,
		'is_married' => $is_married,
		'school' => array(
			'highSchool' => $highSchool,
			'university' => $univ
		),
		'skills' => []
	);
	foreach (array_combine($skills, $scores) as $skill => $score) {
		$arr['skills'][] = array(
			'name' => $skill,
			'score' => $score
		);
	}
	echo json_encode($arr);
}

bioToJson('Muktazam Hasbi Ashidiqi','Semarang',['Membaca', 'Browsing', 'Membaca (lagi)'],false,'SMK N 2 Surakarta','UNNES',['Bahasa Indonesia','Bahasa Inggris','Bahasa Jawa'],[85,90,60]);