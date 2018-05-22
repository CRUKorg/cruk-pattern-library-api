<?php

namespace Cruk\CrukPatternLibraryApi;

use Twig_Environment;
use Twig_Loader_Filesystem;

class Patterns {

  protected $twig;

  public function __construct() {
    $twigLoader = new Twig_Loader_Filesystem(__DIR__.'/../patterns');
    $twigSettings = [
      'autoescape' => 'html',
    ];
    $this->twig = new Twig_Environment($twigLoader, $twigSettings);
  }

  public function getMarkup(string $patternName, array $patternData = []): ?string {
    return $this->twig->render($patternName . '.twig', $patternData);
  }

}
