<?php
// blog/index.php
require __DIR__.'/../shared/config.php';
$stmt = $pdo->query("SELECT id,title,DATE_FORMAT(published_at,'%d/%m/%Y') as dt
                     FROM blog_posts
                     WHERE published_at <= NOW()
                     ORDER BY published_at DESC");
$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<?php include __DIR__.'/../shared/header.php' ?>
<h1>Blog Legate</h1>
<ul>
  <?php foreach($posts as $p): ?>
    <li>
      <a href="post.php?id=<?=$p['id']?>">
        <?=htmlspecialchars($p['title'])?> (<?=$p['dt']?>)
      </a>
    </li>
  <?php endforeach; ?>
</ul>
<?php include __DIR__.'/../shared/footer.php' ?>