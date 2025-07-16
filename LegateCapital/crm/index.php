<?php
require __DIR__ . '/../shared/config.php';
if( empty($_SESSION['user_id']) ){
  header('Location: login.php');
  exit;
}

<div id="calendar"></div>
<script>
  document.addEventListener('DOMContentLoaded', function(){
    var calendar = new FullCalendar.Calendar(
      document.getElementById('calendar'),
      {
        initialView: 'dayGridMonth',
        events: '/legate/crm/api.php?type=appointments'
      }
    );
    calendar.render();
  });
</script>