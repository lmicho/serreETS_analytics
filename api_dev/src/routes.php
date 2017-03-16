<?php
// Routes

$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    
    var_dump($response);
    
    return $this->renderer->render($response, 'index.phtml', $args);
});
