--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3 (Ubuntu 12.3-1.pgdg20.04+1)
-- Dumped by pg_dump version 12.3 (Ubuntu 12.3-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: elearning; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE elearning WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'es_PE.UTF-8' LC_CTYPE = 'es_PE.UTF-8';


ALTER DATABASE elearning OWNER TO postgres;

\connect elearning

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(100),
    description text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: TABLE categories; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.categories IS 'categorias de los cursos';


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: course_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_users (
    "courseId" integer,
    "userId" integer,
    id integer NOT NULL
);


ALTER TABLE public.course_users OWNER TO postgres;

--
-- Name: TABLE course_users; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.course_users IS 'relacion de los alumnos con variso cursos';


--
-- Name: course_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.course_users_id_seq OWNER TO postgres;

--
-- Name: course_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.course_users_id_seq OWNED BY public.course_users.id;


--
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(255),
    description text,
    picture character varying(255),
    "statusId" integer DEFAULT 2,
    previous_approved smallint,
    previous_rejected smallint,
    "teacherId" integer NOT NULL,
    "categoryId" integer NOT NULL,
    "levelId" integer NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- Name: TABLE courses; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.courses IS 'cursos de formacion online';


--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.courses_id_seq OWNER TO postgres;

--
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- Name: goals; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.goals (
    id integer NOT NULL,
    goal character varying(255),
    "courseId" integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.goals OWNER TO postgres;

--
-- Name: TABLE goals; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.goals IS 'logros luego de terminar el curso';


--
-- Name: goals_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.goals_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.goals_id_seq OWNER TO postgres;

--
-- Name: goals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.goals_id_seq OWNED BY public.goals.id;


--
-- Name: lessons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lessons (
    id integer NOT NULL,
    "courseId" integer NOT NULL,
    lesson text,
    url text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.lessons OWNER TO postgres;

--
-- Name: TABLE lessons; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.lessons IS 'lecciones de los cursos';


--
-- Name: lessons_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lessons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lessons_id_seq OWNER TO postgres;

--
-- Name: lessons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lessons_id_seq OWNED BY public.lessons.id;


--
-- Name: levels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.levels (
    id integer NOT NULL,
    description text,
    name character varying(100),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.levels OWNER TO postgres;

--
-- Name: TABLE levels; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.levels IS 'nivel de los cursos';


--
-- Name: levels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.levels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.levels_id_seq OWNER TO postgres;

--
-- Name: levels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.levels_id_seq OWNED BY public.levels.id;


--
-- Name: requirements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.requirements (
    id integer NOT NULL,
    requirement character varying(255),
    "courseId" integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.requirements OWNER TO postgres;

--
-- Name: TABLE requirements; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.requirements IS 'requisitos para tomar el curso';


--
-- Name: requirements_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.requirements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.requirements_id_seq OWNER TO postgres;

--
-- Name: requirements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.requirements_id_seq OWNED BY public.requirements.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    rating integer,
    comment text,
    course_id integer,
    user_id integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: TABLE reviews; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.reviews IS 'comentarios sobre los cursos';


--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: TABLE roles; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.roles IS 'Tabla de roles de usuarios';


--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: status; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.status (
    id integer NOT NULL,
    status character varying(100)
);


ALTER TABLE public.status OWNER TO postgres;

--
-- Name: TABLE status; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.status IS 'estados de los cursos';


--
-- Name: states_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.states_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.states_id_seq OWNER TO postgres;

--
-- Name: states_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.states_id_seq OWNED BY public.status.id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    id integer NOT NULL,
    title character varying(100),
    "userId" integer NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: TABLE students; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.students IS 'estudiantes de la plataforma de formacion online';


--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students_id_seq OWNER TO postgres;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    title character varying(100),
    biography text,
    website_url character varying(255),
    "userId" integer NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- Name: TABLE teachers; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.teachers IS 'docentes para la plataforma online';


--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teachers_id_seq OWNER TO postgres;

--
-- Name: teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teachers_id_seq OWNED BY public.teachers.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    last_name character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    picture character varying(255),
    "roleId" integer DEFAULT 3,
    email character varying(255),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: TABLE users; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.users IS 'tabla de usuarios para la plataforma de formacion online';


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: course_users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_users ALTER COLUMN id SET DEFAULT nextval('public.course_users_id_seq'::regclass);


--
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- Name: goals id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.goals ALTER COLUMN id SET DEFAULT nextval('public.goals_id_seq'::regclass);


--
-- Name: lessons id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons ALTER COLUMN id SET DEFAULT nextval('public.lessons_id_seq'::regclass);


--
-- Name: levels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.levels ALTER COLUMN id SET DEFAULT nextval('public.levels_id_seq'::regclass);


--
-- Name: requirements id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.requirements ALTER COLUMN id SET DEFAULT nextval('public.requirements_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: status id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status ALTER COLUMN id SET DEFAULT nextval('public.states_id_seq'::regclass);


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Name: teachers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers ALTER COLUMN id SET DEFAULT nextval('public.teachers_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, description, created_at, updated_at) FROM stdin;
1	Javascript	JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.	2020-05-17 21:50:26.577236	\N
2	PHP	PHP es un lenguaje de programación de propósito general de código del lado del servidor originalmente diseñado para el preprocesado de texto plano en UTF-8	2020-05-17 21:51:00.130906	\N
3	Amazon web services	Amazon Web Services es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com.	2020-05-17 21:51:38.589481	\N
4	Base de datos	Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistemáticamente para su posterior uso. 	2020-05-17 21:52:15.519274	\N
\.


--
-- Data for Name: course_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_users ("courseId", "userId", id) FROM stdin;
1	171	1
2	171	2
3	171	3
1	172	4
1	173	5
3	173	6
2	170	7
14	171	8
12	171	9
36	171	10
\.


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses (id, name, description, picture, "statusId", previous_approved, previous_rejected, "teacherId", "categoryId", "levelId", created_at, updated_at) FROM stdin;
1	Curso de Básico de Javascript	En este curso aprenderás a programar con el lenguaje Javascript	\N	1	\N	\N	1	1	1	2020-05-17 21:52:50.420114	\N
2	Curso de Intermedio de PHP	En este curso aprenderás a programar con el lenguaje PHP	\N	1	\N	\N	1	2	2	2020-05-17 21:53:52.607322	\N
3	Curso de PostgreSQL	En este curso aprenderás a manejar el motor de base de datos PostgreSQL	\N	1	\N	\N	1	4	3	2020-05-17 21:56:12.499156	\N
37	Curso de prueba	333	\N	3	\N	\N	170	1	2	2020-06-02 10:24:12.269115	\N
12	Curso Intermedio de Vue JS	rwerwerwerwerwerwer	\N	1	\N	\N	170	1	2	2020-06-02 07:44:47.184149	\N
25	Curso de Básico de Jquery	En este curso aprenderás a usar jquery.	\N	3	\N	\N	170	1	1	2020-06-02 09:10:12.599579	\N
14	Curso Avanzado de Svelte JS	En este curso aprenderas a fondo el framework de moda Svelte JS	\N	1	\N	\N	177	1	3	2020-06-02 08:03:36.807622	\N
11	Curso Intermedio de React JS	\N	\N	3	\N	\N	170	1	2	2020-06-02 07:40:39.717017	\N
36	Curso Intermedio de Angular	Angular el framework más robusto de javascript	\N	1	\N	\N	170	1	2	2020-06-02 10:17:28.251893	\N
\.


--
-- Data for Name: goals; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.goals (id, goal, "courseId", created_at, updated_at) FROM stdin;
1	Aprender a programar desde cero	1	2020-05-26 23:57:10	\N
9	Aprender a programar	12	2020-06-02 09:07:36.213646	\N
10	Aprender a programar	25	2020-06-02 09:10:12.607963	\N
11	Aprenderás javascript	25	2020-06-02 09:10:12.610405	\N
12	Aprenderás a usar Ajax	25	2020-06-02 09:10:12.610735	\N
13	Aprender a programar con Javascript	26	2020-06-02 09:28:03.445718	\N
14	Dominar Angular	26	2020-06-02 09:28:03.449001	\N
15	Aprender Typescript	26	2020-06-02 09:28:03.449148	\N
16	Aprender a diseñar BD	27	2020-06-02 09:31:14.270992	\N
17	Aprender SQL	27	2020-06-02 09:31:14.27382	\N
18	Aprender a programar	28	2020-06-02 09:37:23.105603	\N
19	Aprenderás javascript	28	2020-06-02 09:37:23.109617	\N
20	mejorar perfil	28	2020-06-02 09:37:23.111393	\N
21	Aprender a programar	29	2020-06-02 09:37:53.993449	\N
22	Aprenderás javascript	29	2020-06-02 09:37:53.996578	\N
23	mejorar perfil	29	2020-06-02 09:37:53.996681	\N
24	Aprender a programar	30	2020-06-02 09:39:00.54991	\N
25	Aprenderás javascript	30	2020-06-02 09:39:00.552285	\N
42	Aprender a programar	36	2020-06-02 10:17:28.260077	\N
43	Aprenderás javascript	36	2020-06-02 10:17:28.262554	\N
44	Aprender Typescript	36	2020-06-02 10:17:28.263582	\N
45	Aprender a programar	37	2020-06-02 10:24:12.276651	\N
46	Aprenderás javascript	37	2020-06-02 10:24:12.28022	\N
47	mejorar perfil	37	2020-06-02 10:24:12.281016	\N
\.


--
-- Data for Name: lessons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lessons (id, "courseId", lesson, url, created_at, updated_at) FROM stdin;
37	37	Repaso de javascript	<iframe src="https://player.vimeo.com/video/425034367" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>	2020-06-02 10:24:12.281855	\N
35	36	Repaso de javascript	<iframe src="https://player.vimeo.com/video/425034367" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>	2020-06-02 10:17:28.264137	\N
36	36	Introducción a Typescript	<iframe src="https://player.vimeo.com/video/425796859" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>	2020-06-02 10:17:28.268931	\N
\.


--
-- Data for Name: levels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.levels (id, description, name, created_at, updated_at) FROM stdin;
2	Nivel para programadores que tienen experiencia en algún lenguaje	Intermedio	2020-05-17 16:35:58	\N
3	Nivel para programadores avanzados quienes buscan profundizar en el tema	Avanzado	2020-05-17 16:35:56	\N
1	Nivel para los que recién empiezan en el mundo de la programación	Principiante	2020-05-17 16:35:53	\N
\.


--
-- Data for Name: requirements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.requirements (id, requirement, "courseId", created_at, updated_at) FROM stdin;
1	Usted debe saber cómo arrancar una computadora.	3	2020-05-27 00:02:02	\N
2	Ganas de aprender.	3	2020-05-27 00:02:05	\N
3	Saber HTML y CSS básico	2	2020-05-27 00:02:34	\N
4	Saber PHP básico	2	2020-05-27 00:02:35	\N
5	HTML básico	1	2020-05-27 00:03:01	\N
6	Saber usar un sistema operativo	1	2020-05-27 00:03:02	\N
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, rating, comment, course_id, user_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, name, description, created_at, updated_at) FROM stdin;
1	Administrador	Personal encargado de gestionar la plataforma y en dar de alta los cursos enviados por los profesores.	2020-05-17 00:33:59	\N
2	Profesor	Docente especializado en desarrollar cursos altamente capacitados para los alumnos	2020-05-17 00:35:23	\N
3	Estudiante	Estudiante en busca de reforzar y aprender a dominar las tecnologias	2020-05-17 00:37:13	\N
5	testing	rol de prueba	2020-05-18 01:36:53.080676	\N
6	testing 2	rol de prueba 2	2020-05-18 01:37:21.342253	\N
4	Rol editado	descripción del rol editado	2020-05-18 01:36:27.872474	\N
\.


--
-- Data for Name: status; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.status (id, status) FROM stdin;
1	Publicado
2	Pendiente
3	Rechazado
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.students (id, title, "userId", created_at, updated_at) FROM stdin;
1	Estudiante de Ingeniería de Sistemas	4	2020-05-17 21:23:30.837249	\N
2		158	2020-05-25 06:03:14.038014	\N
3	\N	161	2020-05-25 06:05:19.103218	\N
4	\N	162	2020-05-25 06:06:26.32239	\N
5	\N	163	2020-05-25 06:23:16.463025	\N
6	\N	164	2020-05-25 07:28:32.54961	\N
7	\N	165	2020-05-26 03:35:54.212679	\N
8	\N	166	2020-05-26 03:36:47.812809	\N
9	\N	167	2020-05-26 03:37:58.561323	\N
10	\N	168	2020-05-27 00:36:36.757579	\N
11	\N	169	2020-05-28 05:21:02.755727	\N
12	\N	170	2020-05-31 23:13:28.303251	\N
13	\N	171	2020-06-01 01:47:42.115427	\N
14	\N	172	2020-06-01 05:30:39.633634	\N
15	\N	173	2020-06-01 21:53:42.495591	\N
16	\N	174	2020-06-02 07:53:01.974215	\N
17	\N	175	2020-06-02 07:54:24.793776	\N
18	\N	176	2020-06-02 07:55:42.631133	\N
19	\N	177	2020-06-02 07:56:20.710078	\N
20	\N	178	2020-06-04 03:38:12.284103	\N
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teachers (id, title, biography, website_url, "userId", created_at, updated_at) FROM stdin;
1	Programador web	Programador web fullstack, experiencia trabajando con PHP y Javascript	https://github.com/RoyCabrera	1	2020-05-17 21:15:09.427348	\N
2	Ing. Sistemas	Ingniero de sistemas con basta experiencia en el mundo del desarrollo web	https://github.com/RoyCabrera	2	2020-05-17 21:18:16.568729	\N
3	Programador fullstack	lorem	\N	170	2020-06-02 02:29:54	\N
4	\N	\N	\N	177	2020-06-02 07:56:23.441554	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, last_name, password, picture, "roleId", email, created_at, updated_at) FROM stdin;
2	Jordan	Walke	123456	\N	2	jwalke@elearning.com	2020-05-17 21:18:04.319228	\N
1	Roy Andy	Cabrera Ayala	123456	\N	2	roycabrera80@gmail.com	2020-05-17 21:11:13.869536	\N
4	Juliana	Gattas	123456	\N	3	jgattas@elearning.com	2020-05-17 21:22:09.097364	\N
3	Jose Luis	Cabrera Román	123456	\N	1	jlcabrera@elearning.com	2020-05-17 21:19:47.564211	\N
154	Roy Andy	Cabrera Ayala	$2a$10$k12gMUTmfXN1C6wtBpD8GOZ0KWz3YA.awdk6MGxBt0mDfx6KK7e9u	\N	3	rcabrera@elearning.com	2020-05-25 05:26:27.32596	\N
155	usuario estudiante	apellidos	$2a$10$0I9yQs/DfGVRgdWxYfxig.A2irps7gYjwIZ.GkBRfwhoIKm1L98/G	\N	3	estudiante2@estudiante.com	2020-05-25 05:49:20.068118	\N
156	usuario test	apellido test	$2a$10$GQheyChRxt0dMzARlg/re.15eevVvTYFtY82zstx/uTKcMa0RshMu	\N	3	estudiante3@estudiante.com	2020-05-25 05:56:56.34863	\N
157	usuario test	Apellido Prueba	$2a$10$OJnHDcEOwev6N0etSO8nlOFxsiqtQ7ZSqksw3MfnrNyTm2IcVG9Ca	\N	3	estudiante4@estudiante.com	2020-05-25 05:57:40.226101	\N
158	Roy Andy	Sesto martinez	$2a$10$25SG5bZadgYEKHlynbFi2.QexVPZbcWfzrCGi4hzNu1XNgk9HRZTO	\N	3	estudiante5@estudiante.com	2020-05-25 05:59:24.553172	\N
159	Roy Andy	Cabrera Ayala	$2a$10$4TocFUNqRDFnWpbA4donS.20C3qpLcXD.KS70PHctDSNKnzKP1Eee	\N	3	estudiante6@estudiante.com	2020-05-25 06:03:28.978805	\N
160	Roy Andy	Cabrera Ayala	$2a$10$LtA6Ln8oAT/bNY6iJ7BU5ugNUENyU9tLIhzn1iEdM67mU25MPTSOy	\N	3	estudiante7@estudiante.com	2020-05-25 06:04:58.404965	\N
161	Roy Andy	Cabrera Ayala	$2a$10$K.fFcsFDwjFdcoY.E5/JkuAWD72GXVilpUt1BvasICdobYSDOf/72	\N	3	estudiante8@estudiante.com	2020-05-25 06:05:19.098505	\N
162	Roy Andy	Cabrera Ayala	$2a$10$dpSSp2jTSQIJ5wiEJf3vu.5S3uzkWfy/Ya0QfL5pP0Hr7t0wkTr.S	\N	3	estudiante9@estudiante.com	2020-05-25 06:06:26.317695	\N
163	Roy Andy	Sesto martinez	$2a$10$3cqKNo.teAATc6TBWa/6A.O1Srl1zQXkU8cZHEbLbUv.pwskhN2ji	\N	3	royadmincabrera80322@gmail.com	2020-05-25 06:23:16.457616	\N
164	Nuevo estudiante	Apellido Prueba	$2a$10$LrVF8HbXhvXEbkX4icx.YOCuPvUEu2aAfdiatoMOFrsEC3XfzeMK.	\N	3	estudiante10@estudiante.com	2020-05-25 07:28:32.54448	\N
165	Roy	Cabrera Ayala	$2a$10$pifViq6KtC30rQojVgCWquixZh1kPgvJV7vLPjJt9WTfsBYBEPrwK	\N	3	royestudiante@estudiante.com	2020-05-26 03:35:54.20507	\N
166	Roy	Cabrera Ayala	$2a$10$.knLS5uT33w32/paT0LDh.gfReZV0ZDu.nU5kJWT/RwXOjGeUTQ7.	\N	3	estudiante101@estudiante.com	2020-05-26 03:36:47.809119	\N
167	Roy Andy	Cabrera Ayala	$2a$10$tG.J7BPxgLc58mGne4i5HuICVh6KBuydk46zrvf0WWBftBqGbM/ru	\N	3	estudiante107@estudiante.com	2020-05-26 03:37:58.557435	\N
168	Roy	Cabrera Ayala	$2a$10$JBc5/tRzy8ANALlDdCPWX.mL4ltluyARXqIChbPJrCaAJe/4Zs3wO	\N	3	estudiante@elearning.com	2020-05-27 00:36:36.751846	\N
169	Roy Andy	Cabrera Ayala	$2a$10$6xcHPT/QPzUb2zu6lsnzwOjCAZX3t1B/K76H9OyP9TOOwF7taaXZe	\N	3	test2@test.com	2020-05-28 05:21:02.747181	\N
176	Roy e	123	$2a$10$s6vC7ki0JXxoxzw79fRc/e7zvRGbCxQJY5XzeiYMj82jqJgQ55L6K	\N	2	docente4@elearning.com	2020-06-02 07:55:42.625111	\N
177	Emilia	Ayala	$2a$10$85Pt1Cny9wrZxwiqj4X08ejo9ky1mYYwZaZybP2PsuhnzQRRUGhcS	\N	2	docente5@elearning.com	2020-06-02 07:56:20.706095	\N
171	Roy Estudiante 1	Cabrera	$2a$10$bP92CB4F/OCuE23yWqzZEeq0qbmkjr5ItSBLIewMalJsDaPQ3E19e	\N	3	estudiante1@elearning.com	2020-06-01 01:47:42.110364	\N
178	Roy Admin	Admin	$2a$10$h4pp.eGmN2jWtUJbD1qob.8pxw1zsttv6UNY52UmwzyMU.lbrTseW	\N	1	admin1@elearning.com	2020-06-04 03:38:12.274275	\N
170	Roy Andy	Cabrera Ayala	$2a$10$S78LnGZzgUTKSk2kyPkTquqSv7bbSHSIBBs5IDG48mMiKLyeyW24W	\N	2	docente1@elearning.com	2020-05-31 23:13:28.294353	\N
172	Roy 2	Cabrera 2	$2a$10$vYmkI0VnRvsQgxj8vbb.p.NWW9ovIYBP.jp/.ka8UxXwSMoOh5ndi	\N	3	estudiante2@elearning.com	2020-06-01 05:30:39.628946	\N
173	Roy editado	Cabrera	$2a$10$bWJOPuacGYRks8QZYw1NDOFCxv3kSNPLLHW0z.v9inzIs7AoJIljm	\N	3	estudiante3@elearning.com	2020-06-01 21:53:42.489979	\N
174	teacher	teacher	$2a$10$QdeGkbcH5wjUjPgC0S5f4OlT.PVm3p60Dnp9vKKpSh05hU12OzDlK	\N	2	docente2@elearning.com	2020-06-02 07:53:01.96933	\N
175	tea	teach	$2a$10$tJMPrxx7H1DuRdwm86f.VuUSKEd3WSboerl8bEc0kQssS2JDDua1e	\N	2	docente3@elearning.com	2020-06-02 07:54:24.788472	\N
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 4, true);


--
-- Name: course_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_users_id_seq', 10, true);


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 37, true);


--
-- Name: goals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.goals_id_seq', 47, true);


--
-- Name: lessons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lessons_id_seq', 37, true);


--
-- Name: levels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.levels_id_seq', 3, true);


--
-- Name: requirements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.requirements_id_seq', 1, false);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_id_seq', 1, false);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 11, true);


--
-- Name: states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.states_id_seq', 4, true);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_id_seq', 20, true);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 178, true);


--
-- Name: categories categories_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY (id);


--
-- Name: course_users course_users_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_users
    ADD CONSTRAINT course_users_pk PRIMARY KEY (id);


--
-- Name: courses courses_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pk PRIMARY KEY (id);


--
-- Name: goals goals_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.goals
    ADD CONSTRAINT goals_pk PRIMARY KEY (id);


--
-- Name: lessons lessons_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_pk PRIMARY KEY (id);


--
-- Name: levels levels_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.levels
    ADD CONSTRAINT levels_pk PRIMARY KEY (id);


--
-- Name: requirements requirements_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.requirements
    ADD CONSTRAINT requirements_pk PRIMARY KEY (id);


--
-- Name: reviews reviews_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pk PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: status states_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status
    ADD CONSTRAINT states_pk PRIMARY KEY (id);


--
-- Name: students students_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pk PRIMARY KEY (id);


--
-- Name: teachers teachers_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: categories_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX categories_id_uindex ON public.categories USING btree (id);


--
-- Name: course_users_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX course_users_id_uindex ON public.course_users USING btree (id);


--
-- Name: courses_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX courses_id_uindex ON public.courses USING btree (id);


--
-- Name: goals_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX goals_id_uindex ON public.goals USING btree (id);


--
-- Name: lessons_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX lessons_id_uindex ON public.lessons USING btree (id);


--
-- Name: levels_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX levels_id_uindex ON public.levels USING btree (id);


--
-- Name: requirements_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX requirements_id_uindex ON public.requirements USING btree (id);


--
-- Name: reviews_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX reviews_id_uindex ON public.reviews USING btree (id);


--
-- Name: states_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX states_id_uindex ON public.status USING btree (id);


--
-- Name: students_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX students_id_uindex ON public.students USING btree (id);


--
-- Name: students_user_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX students_user_id_uindex ON public.students USING btree ("userId");


--
-- Name: teachers_user_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX teachers_user_id_uindex ON public.teachers USING btree ("userId");


--
-- Name: users_email_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_uindex ON public.users USING btree (email);


--
-- Name: course_users course_student_courses_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_users
    ADD CONSTRAINT course_student_courses_id_fk FOREIGN KEY ("courseId") REFERENCES public.courses(id);


--
-- Name: course_users course_student_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_users
    ADD CONSTRAINT course_student_users_id_fk FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: courses courses_categories_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_categories_id_fk FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- Name: lessons lessons_courses_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_courses_id_fk FOREIGN KEY ("courseId") REFERENCES public.courses(id);


--
-- Name: requirements requirements_courses_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.requirements
    ADD CONSTRAINT requirements_courses_id_fk FOREIGN KEY ("courseId") REFERENCES public.courses(id);


--
-- Name: reviews reviews_courses_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_courses_id_fk FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- Name: reviews reviews_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: users role_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT role_id FOREIGN KEY ("roleId") REFERENCES public.roles(id);


--
-- Name: students students_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_users_id_fk FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: teachers teachers_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_users_id_fk FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

