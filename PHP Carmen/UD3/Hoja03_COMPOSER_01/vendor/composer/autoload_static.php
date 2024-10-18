<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit11ff9669e7428cfeb00b5b61cb0c97a7
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Fran\\Hoja03Composer01\\' => 22,
        ),
        'B' => 
        array (
            'Brick\\Math\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Fran\\Hoja03Composer01\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Brick\\Math\\' => 
        array (
            0 => __DIR__ . '/..' . '/brick/math/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit11ff9669e7428cfeb00b5b61cb0c97a7::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit11ff9669e7428cfeb00b5b61cb0c97a7::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit11ff9669e7428cfeb00b5b61cb0c97a7::$classMap;

        }, null, ClassLoader::class);
    }
}