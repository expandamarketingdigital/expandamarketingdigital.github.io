<?php
require __DIR__ . '/../shared/config.php';

<?php
require __DIR__.'/../shared/config.php';
header('Content-Type: application/json');
$type = $_GET['type'] ?? '';
if($type==='appointments'){
  $stmt = $pdo->query("SELECT id,title, start, end FROM crm_appointments");
  echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}