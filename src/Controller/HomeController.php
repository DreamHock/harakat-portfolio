<?php

namespace App\Controller;

use App\Entity\Message;
use App\Form\MessageType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        $form = $this->createForm(MessageType::class);
        return $this->render('pages/homepage.html.twig', [
            'form' => $form
        ]);
    }

    #[Route('/messages', name: 'create_message', methods: "POST")]
    public function postMessage(Request $request, EntityManagerInterface $entityManager)
    {
        $data = json_decode($request->getContent());

        $newMessage = new Message();

        $form = $this->createForm(MessageType::class, $newMessage);

        $form->handleRequest($request);

        return $this->json($request->request->all());

        $form->submit($request->request->all());

        return ($form->isValid());

        $newMessage->setSenderEmail($data->email)
            ->setSenderName($data->name)
            ->setMessage($data->message);

        $entityManager->persist($newMessage);
        $entityManager->flush();
        return $this->json('message posted successfully', 200);
    }
}
