<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit5a514800bf37b268eb3d84bf316456ef
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit5a514800bf37b268eb3d84bf316456ef', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit5a514800bf37b268eb3d84bf316456ef', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit5a514800bf37b268eb3d84bf316456ef::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
