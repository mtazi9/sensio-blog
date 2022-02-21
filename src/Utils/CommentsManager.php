<?php

namespace App\Utils;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class CommentsManager
{
    private $commentsApi;

    public function __construct(HttpClientInterface $commentsApi)
    {
        $this->client = $commentsApi;
    }


    public function addComment()
    { 
        
    }

    public function getCommentsByPost()
    { 
        $response = $this->client->request('GET', 'comments', [
            'headers' => [
                'Content-Type' => 'application/json',
            ],
        ]);

        return $response->toArray();
    }
}
