<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */

// MODO DINÂMICO: Tenta pegar a variável do Docker. Se não existir (na HostGator), usa a string de produção.
/** Database name */
define( 'DB_NAME', getenv('WORDPRESS_DB_NAME') ?: 'banco_producao' );
/** Database username */
define( 'DB_USER', getenv('WORDPRESS_DB_USER') ?: 'user_producao' );
/** Database password */
define( 'DB_PASSWORD', getenv('WORDPRESS_DB_PASSWORD') ?: 'senha_producao' );
/** Database hostname */
define( 'DB_HOST', getenv('WORDPRESS_DB_HOST') ?: 'localhost' );
// MODO DINÂMICO PARA URLs (Adapta sozinho para Localhost ou Produção)
$protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') ? 'https://' : 'http://';
$current_host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'tiweb.app.br';

define('WP_HOME', $protocol . $current_host);
define('WP_SITEURL', $protocol . $current_host);

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'rluep2iz88je0euwgd5bcwxhjwfeumh4gbhrdmtkoj0g5phmkqmn0kpvt4mn3gpo' );
define( 'SECURE_AUTH_KEY',  'rrls0sqs2cpiplpgvzz7w3ckg7r6u3b6eh2nvfnk7ptrxxox72bjsdoggdbtne5y' );
define( 'LOGGED_IN_KEY',    '637dlf6dbwece1ivujfuhep0qdpxj7zz2xspjkqwqttkqj3f3nd4peopjvehftzl' );
define( 'NONCE_KEY',        'pehrvezko7qsfo7rdxcaanvwcg3zurfzdbsqqppehxflpd2qc0zlbwanmmfr0tgo' );
define( 'AUTH_SALT',        'yilc1fxjg29kpo5flfolcj6pbksnb7nyivxrvxt6jfr5igjjdrhq5z8idbj2utjx' );
define( 'SECURE_AUTH_SALT', 'e7dskfz9o0a6zp6s1tjqmz5c0kpddle01cslaq1fhr4gmqtsgkqa2wydinb6s4a0' );
define( 'LOGGED_IN_SALT',   'cxrvjmfaihbiqaxwmogp2vxkpc5mkfuhs43vqv8ozvc508b8wu4vtcptuirlqsye' );
define( 'NONCE_SALT',       'edruzb1fmt03hkmqyqzmh6idfp4umxejgmmaacp1m9v6uracnkmxycvzx58carku' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
