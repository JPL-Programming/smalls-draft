<?php

if ($_SERVER['REQUEST_METHOD'] === "GET") {

	$teamsToPlayer = file_get_contents('./teamsToPlayer.json');

	echo $teamsToPlayer;

} elseif ($_SERVER['REQUEST_METHOD'] === "POST") {

	$teamsToPlayer = $_POST['teamsToPlayer'];

	file_put_contents('./teamsToPlayer.json', $teamsToPlayer);

}