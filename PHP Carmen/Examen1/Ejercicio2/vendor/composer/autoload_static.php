<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5a514800bf37b268eb3d84bf316456ef
{
    public static $prefixLengthsPsr4 = array (
        'D' => 
        array (
            'Daw2\\Ejercicio2\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Daw2\\Ejercicio2\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5a514800bf37b268eb3d84bf316456ef::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5a514800bf37b268eb3d84bf316456ef::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5a514800bf37b268eb3d84bf316456ef::$classMap;

        }, null, ClassLoader::class);
    }
}
