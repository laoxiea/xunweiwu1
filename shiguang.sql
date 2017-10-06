
create database shiguangshe charset utf8;
use shiguangshe;

SET NAMES GBK;

���ף�
1.�������(dish_kind)��kid��ϵ���࣬ id�� kname��ϵ����

create table dish_kind(
	id     INT PRIMARY KEY AUTO_INCREMENT,
	kid    INT,
	kname  VARCHAR(100)
);
SET NAMES GBK;
INSERT INTO dish_kind VALUES(null,10,"�ҳ���");
INSERT INTO dish_kind VALUES(null,20,"����");
INSERT INTO dish_kind VALUES(null,30,"����");
INSERT INTO dish_kind VALUES(null,40,"���");


2.���������(dish)��kid��ϵ���࣬did��Ʒ��ţ�dname��Ʒ���ƣ�dinfo��Ʒ��飬dpic��ƷͼƬ,dmaterialԭ�ϣ�
                    dstep1,step1_p,dstep2,step2_p,dstep3,step3_p,dstep4,step4_p,dstep5,step5_p

create table dish(
	did       INT PRIMARY KEY AUTO_INCREMENT,
	kid       INT,
	dname     VARCHAR(100),
	dinfo     VARCHAR(500),
	dpic   VARCHAR(100),
	dmaterial VARCHAR(500),
	dstep1    VARCHAR(200),
	dstep1_p  VARCHAR(100),
	dstep2    VARCHAR(200),
	dstep2_p  VARCHAR(100),
	dstep3    VARCHAR(200),
	dstep3_p  VARCHAR(100),
	dstep4    VARCHAR(200),
	dstep4_p  VARCHAR(100),
	dstep5    VARCHAR(200),
	dstep5_p  VARCHAR(100)
);

INSERT INTO dish VALUES(null,20,"�ع���","�ع�����һ��û���ϱ�����ģ��Ƚ������Ĵ�ͳ�Ĳ��ȣ�Ҳ�ǰ��ղ��������ӭ��һ���ҳ��ˡ�",
"image/list/7- (2).png","�廨��550��,���꽴1����,����2��,����1С��,����1/4��,��Ƥ��4Ƭ,��1С��,��������,�ཷ1��,�콷1����",
"�廨��ϴ����ˮ�¹����뻨��������","image/list/7- (1).jpg","��Ʋȥ��ĭ�����̳�","image/list/7- (2).jpg","�������кñ���",
"image/list/7- (3).jpg","���뽪�����ط���һ��","image/list/7- (6).jpg","����������������������������","image/list/7- (10).jpg");

INSERT INTO dish VALUES(null,10,"�򵥿��������","��Ϻ�����ۺ������ζ����֭����ú���ζ",
"image/list/8- (2).jpg","���20��������һ��,�����������������������������л�����",
"��׼��ԭ���ϣ���ͼ��ʾ","image/list/8- (3).jpg","ȥϺ��","image/list/8- (4).jpg","ˮ�տ����ȷ������",
"image/list/8- (5).jpg","�ٷ�������","image/list/8- (6).jpg","����������Σ����м�����ζ������ǰ���л�����","image/list/8- (2).jpg");

INSERT INTO dish VALUES(null,30,"��������","������������ձر�����������",
"image/list/9- (1).jpg","����Ƥ1�š�����6��,����������ɫ������������һС�������������׾�һ���ס�ʳ���������潴һ��",
"�����Ķ���Ƥ�ÿ�ˮ�������Σ�Ȼ���ϴ�ɾ����гɴ�С���ʵķ��飬�����������á����ϴ���гɴ�˿","image/list/9- (3).jpg",
"�����������У���������ˮ���򣬼��������κͼ��ΰ׾ƣ�����ɾ��ȵĵ�Һ","image/list/9- (5).jpg",
"���з�һ�����ͣ����Ⱥ󣬽���Һ���룬�ȵ�Һ΢΢����ת��С�𣬽���Һ���ɼ����죬Ȼ�����",
"image/list/9- (4).jpg","����������ͣ������潴������У�С����������������һ���ǡ�����һ�����ͣ�����������Һճ�������ȳ��õļ������룬���͵��������ȼ���",
"image/list/9- (2).jpg","����������Ʒͼ","image/list/9- (4).jpg");

INSERT INTO dish VALUES(null,40,"����������","������������һ��û���ϱ�����ģ��Ƚ������Ĵ�ͳ�Ĳ��ȣ�Ҳ�ǰ��ղ��������ӭ��һ���ҳ��ˡ�",
"image/list/10- (5).jpg","�廨��650�ˡ�����1��,��1�Ρ���3Ƭ���˽�1�����ݹ�1������Ҷ1Ƭ��������2�ˡ�����3�ˡ����ѽ�20�ˡ�ֲ����30�ˡ��ƾ�15�ˡ�ʳ��5�ˡ�����15�ˡ��ϳ�10�ˡ�����10�ˡ�ˮ����",
"�廨��ϴ���п飬����ȥƤϴ������С��","image/list/10- (1).jpg",
"�廨����ˮ�¹�����һ�׻ƾƣ�������������ˮ","image/list/10- (2).jpg",
"�ȹ����ͣ��ŷ��ѽ��������ͣ������̺õ��廨��",
"image/list/10- (3).jpg","С���Գ����廨����ɫ������ƾơ��Ρ����顢�ϳ�ͱ���",
"image/list/10- (4).jpg","����տ���תС����ϸ�������һСʱ���ң���������","image/list/10- (5).jpg");

INSERT INTO dish VALUES(null,10,"�㿾�������","�������״�ˮ����ݣ����� �ܺ����׽������Ƥȥ��Ŵ�׷�����װ̫��Ŷ������ʱ����е���",
"image/list/11- (1).jpg","����һֻ��Ŵ�װ���,����һ�ס�������һС�ס��ඹһ�ѡ����ܲ����",
"����ż��ΰ״ף�������Ž�ȥ����ʮ��������","image/list/11- (2).jpg",
"Ŵ�׷���ˮ����","image/list/11- (3).jpg",
"�������߲˷����������",
"image/list/11- (4).jpg","�����õ�Ŵ�׷�װ��ȥ",
"image/list/11- (5).jpg","������õ�����������ը����230�ȿ�ʮ����,��������΢��ȴ�£��гɶμ���","image/list/11- (6).jpg");

INSERT INTO dish VALUES(null,20,"������˿","������˿����˿���˵���й�����ĸ��Ѷȣ���<�������>�Ǿ��䣬һ���Ĵ�����һ���Ļ�����һ�������˻�ζ",
"image/list/12- (3).jpg","���Ｙ��300��,С��2�á���2Ƭ���ݺ콷10�ˡ�ʳ��3�ˡ�����25�ˡ��״�20�ˡ��Ͼ�10�ˡ�����15�ˡ�ֲ����50�ˡ����15�ˡ���6��",
"ͨ��Ƭ��ƬȻ���������׼����˿�������ʱ����Զ�һ�£�Ȼ������˿��ǳ����ж��һ�ǳ�����","image/list/12- (4).jpg",
"Ȼ��������κ��Ͼ����£��ٷŵ���ץ�ȣ����Ÿɵ�ۣ�Ȼ��������ͷ�ס��������˿�����ѽ�","image/list/12- (1).jpg",
"�ݺ콷ȥ�Ѷ��飬Խ��Խ�ã�Ȼ��н������ױ��ã������к���˿����˿��ľ����˿�������ľ����ˮ��һ�£�����ˮ����",
"image/list/12- (2).jpg","����֮�أ�ζ֭���Ͼ�10�ˡ��״�20�ˡ�����25�ˡ���һ��㡢����15�ˡ����15�ˣ�����ס֭�����ɴ󣬲�Ȼ��������̫֭�࣬���Զ�Щ�������ʱ���ݽ��ͽ��õ���˿������������ó��ÿ��ӻ������������̷Ŵн��⳴�㣬Ȼ������̹��Ķ���˿��ľ��˿�������ζ֭���ٳ����¾Ϳ�����",
"image/list/12- (3).jpg","������˿��Ʒͼ","image/list/12- (3).jpg");

INSERT INTO dish VALUES(null,40,"�罷��ͷ","�罷��ͷ�����ϵ������̶��һ�����ˡ�����ͷ�ġ�ζ�ʡ��Ͷ������ġ�����Ϊһ�壬��ζ����һ��",
"image/list/13- (1).jpg","����1����ʳ��2�ˡ��Ͼ�8�ˡ���10�ˡ���10�ˡ���5�ˡ��罷100�ˡ�ֲ����1��",
"����ȥ��ȥ��ȥ���࣬��ϴ�ɾ�������ˮ�֣�ȡ����ͷ�����㼹������翪����������","image/list/13- (2).jpg",
"���κ��Ͼ�Ϳ����Ĩ��ͷ�����棬����10���Ӻ��ٴγ�ϴ�ɾ�����������ˮ�֣����̵ײ����ϴн�����ͷչ����ƽ�̽���","image/list/13- (3).jpg",
"ȡ�����罷���飬�罷������ͷ���棬������ˮ��ˮ����������̴������8����",
"image/list/13- (4).jpg","�������Ͻ���ĩ(�ⲽ�������������������)��������2����",
"image/list/13- (5).jpg","ȡ�����ϴ��飬��һ�����ͣ����Ƚ���������","image/list/13- (1).jpg");

INSERT INTO dish VALUES(null,40,"�ɹ��˻�","��˹ݵĸɹ��˻�����ˬ�࣬�ǳ��������·��ˣ���Ȼ������ơ�ƾ͸������ˡ�",
"image/list/14- (3).jpg","�˻�500�ˣ��廨��100�ˡ���⽷2������4Ƭ����5�ˡ�ʳ��1.5С�ס�����2��",
"�˻���ϴ�ɾ�����С�����ű�����С�䣬�õ���ˮ����10���ӣ���ϴ�ɾ���������ˮ��","image/list/14- (6).jpg",
"�廨����Ƭ������һ�ף���⽷��Ȧ��������Ƭ��������ɢ����С��","image/list/14- (4).jpg",
"�廨�������������С������ɿ�����ͣ���������һ��",
"image/list/14- (2).jpg","����𣬵���˻�����ͣ30���ٷ������£����Ϲ��ǣ����л�h30�룬��ʱ����Կ����˻�ͷ���е㽹ɫ��",
"image/list/14- (1).jpg","�����⽷�ʹ����飬���Ⱥ����һ�׽��ͣ��������ȣ����ǰ����һС���γ��ȼ���","image/list/14- (5).jpg");

INSERT INTO dish VALUES(null,10,"��������","�����������й��Ĵ����������������ʳƷ���÷�˿����ĩ�������꽴����",
"image/list/15- (2).jpg","������100�ˡ���˿100�ˣ�ϸ���2������3Ƭ����������1���ס�����1/4��ס�����1��ס�ֲ����1���ס�ˮ100����",
"�������ͣ�����н�������ĩɿ��������","image/list/15- (6).jpg",
"����1���������꽴��������","image/list/15- (1).jpg",
"�����ڵ���100��������ˮ",
"image/list/15- (5).jpg","������ǡ��������",
"image/list/15- (4).jpg","��������ķ�˿����������֭�ոɣ����ϴл����ȼ���","image/list/15- (3).jpg");

INSERT INTO dish VALUES(null,30,"÷�˿���","������ǹ㶫�Ƚϳ�����һ���ˣ��õ���÷�ɲ˵���ģ��ر��г��÷���൱�ں��Ĵ��Ķ���ѿ�˲���һ�ָɲˣ�ֻ��ζ���Ƚ����",
"image/list/16- (4).jpg","�廨��500�ˡ�÷��100�ˣ����30�ˡ�����10�ˡ��ϳ�2�ˡ����10�ˡ�����(��)��顢����10�ˡ��ƾ�10�ˡ���5�ˡ���5�ˡ�С��5�ˡ�ɫ��������",
"÷����ˮ���ϣ�ϴ���Σ�����������ϴһ�£�����ϴ̫�ɾ�����Ȼζ������","image/list/16- (5).jpg",
"���⣬�ŵ�н�������տ���С����ų��죬����ú��̳������ȱ���Ĩ���ϳ�","image/list/16- (2).jpg",
"���͵��˳��ȣ�����Ƥ���½�ȥը��������ը��λ���гɴ�Ƭ������ƾϲ���Լ����գ�Ȼ������е��ϣ����򽴡����顢�ϳ顢��͡��츯�顢���ǡ��ƾƣ�ȫ�ӽ�ȥ����",
"image/list/16- (3).jpg","��һ���룬��Ƥ������ã�Ȼ����ݺõ�÷�˼���ˮ�����ϱ�Ū�����ˣ��������ʣ�µ�֭����ȫ����ȥ",
"image/list/16- (1).jpg","�Ϲ�������һСʱ����ѹ����ʮ���Ӳ���ˣ�����󵹿۵����У���������У���������","image/list/16- (4).jpg");

INSERT INTO dish VALUES(null,20,"ˮ����Ƭ","ˮ�����ɫ�ǡ��顢�����ʡ��̡���ˮ����Ĳ�һֱ��������һ����ʢ��˥�Ĳ�",
"image/list/17- (3).jpg","���Ｙ��400�ˣ�������1�ס�������1�ס�������1�ס�����1�ס�������1�ס�ˮ���1���ס�ֲ����1���ס�����1С�ѡ�С��2��������3�ꡢ�Ͼ�1С�ס�ʳ��3��",
"���Ｙ�������΢��һ�£�ȡ���д�Ƭ����Ƭ�ӵ��塢�Ρ������͡��Ͼơ�ˮ��۵�ץ�ȣ�Ҫ�����۵����ž��Ǽ���������ˮץ�ȣ�������Ͻ������ܹؼ������ڼ��������Ͱ��ȣ���������������䶳һ�ᣬ���Է�ֹһ���ѽ���",
"image/list/17- (4).jpg",
"��ײ�ϴ��˺С�飬���зż����ͣ�����ײ˸��Ϲ��ǣ����͵��³�һ��","image/list/17- (5).jpg",
"���з������ȣ����㻨���̳�������л��Գ�����ζ�������ú���������������Գ�",
"image/list/17- (1).jpg","����ˮ���߸��������͡��������󿪵�ζ���������պõ���Ƭ������Ƭ������ɢ���������̹ػ�ǧ��Ҫ��̫�ã��������ʱ��ϣ�",
"image/list/17- (6).jpg","��������ĵײ����̳���Ƭ���ڰײ��ϲ�������֭��Ȼ�����ϻ����棬��������ĵײ����̳���Ƭ���ڰײ��ϲ�������֭��Ȼ�����ϻ�����","image/list/17- (2).jpg");

INSERT INTO dish VALUES(null,30,"�Ǵ��Ź�","�������Ź�ʱ���Ͽ�����20���ӣ�Ҳ�����Ǽ���Сʱ����һ�����������ζ�ģ�������Ҫ���ĵĹ�",
"image/list/18- (4).jpg","������������״���������ɰ����������������С�������������������ϳ�������ʳ��������ɫ��������",
"�߹�ϴ�ɾ��������顢��˿���Ρ������ƣ��ű���һ��","image/list/18- (3).jpg",
"������ƽ�׹���������ƽ�ţ��������������ɫ���������ϳ���ɫ","image/list/18- (2).jpg",
"����һ�����������Ŀ�ˮ��������״ס���ɰ�ǣ������õ��Źǣ���ˮ��û���Źǣ��л�����40�������Ź��������㣬�����֭,������м���",
"image/list/18- (1).jpg","�Ǵ��Źǳ�Ʒͼ",
"image/list/18- (4).jpg","�Ǵ��Źǳ�Ʒͼ","image/list/18- (4).jpg");


3.�û���(userlist):uid��uname�ǳ�,uaccount�˺���,upwd,upic,uaddr�ջ���ַ,�ջ���uaccept

create table userlist(
    uid      INT PRIMARY KEY AUTO_INCREMENT,
    uname    VARCHAR(100),
    uaccount VARCHAR(100),
    upwd     VARCHAR(100),
    upic     VARCHAR(100),
    uaddr    VARCHAR(100),
    uphone   VARCHAR(100),
    uaccept  VARCHAR(50)
);

SET NAMES GBK;
INSERT INTO userlist VALUES(null,"����ʳ��־����","zhibao","123456","image/user/1.jpg","�Ĳ�����","13841878461","����");
INSERT INTO userlist VALUES(null,"�����ҵı���","benben","123456","image/user/2.jpg","������","13841878461","����");
INSERT INTO userlist VALUES(null,"Hellobaby��ñ���","baby","123456","image/user/3.jpg","����·","13841878461","�Ű�");
INSERT INTO userlist VALUES(null,"��ʮ����С����","xiaojuzi","123456","image/user/4.jpg","������","13841878461","л��");


4.��Ʒ�����(classify):id,cid��Ʒ���࣬cname��Ʒ��������

create table classify(
    id     INT PRIMARY KEY AUTO_INCREMENT,
    cname  VARCHAR(100),
    cid    INT
);
SET NAMES GBK;
INSERT INTO classify VALUES(null,"����",1);
INSERT INTO classify VALUES(null,"�決",2);
INSERT INTO classify VALUES(null,"ˮ��",3);


5.��Ʒ��(product):pid ��Ʒ��ţ�pname ��Ʒ����pprice ��Ʒ�۸�,pstandard ��Ʒ���pinfo ��Ʒ��飬ppic,ppic1,
                            ppic2,ppic3,ppic4,ppic5,ppic6,ppic7,ppic8

create table product(
    pid        INT PRIMARY KEY AUTO_INCREMENT,
    pname      VARCHAR(100),
    pprice     DOUBLE(8,2),
    pstandard  VARCHAR(100),
    pinfo      VARCHAR(100),
    ppic       VARCHAR(100),
    ppic1      VARCHAR(100),
    ppic2      VARCHAR(100),
    ppic3      VARCHAR(100),
    ppic4      VARCHAR(100),
    ppic5      VARCHAR(100),
    cid        INT
);
SET NAMES GBK;
INSERT INTO product VALUES(null,'�����н�С�����',5,'�����н�С����� 500g','����ϸ���ֽ������ʽ��������','image/product/1.jpg',
'image/product/1-lg (1).jpg','image/product/1-lg (2).jpg','image/product/1-lg (3).jpg','image/product/1-lg (4).jpg','image/product/1-lg (5).jpg',2);
INSERT INTO product VALUES(null,'��ά�µ�̢Һ',16,'��ά�µ�̢Һ500g','����Ũ����������ʧ�ܵĵ�̢','image/product/2.jpg',
'image/product/2-lg (1).jpg','image/product/2-lg (2).jpg','image/product/2-lg (3).jpg','image/product/2-lg (4).jpg','image/product/2-lg (5).jpg',2);
INSERT INTO product VALUES(null,'��Ӣ��������м',6,'��Ӣ��������м 200g','��ըʳ��Ļƽ����£����͸��ٸ�����','image/product/3.jpg',
'image/product/3-lg (1).jpg','image/product/3-lg (2).jpg','image/product/3-lg (3).jpg','image/product/3-lg (4).jpg','image/product/3-lg (5).jpg',2);
INSERT INTO product VALUES(null,'����������',15,'���������� 500g','����ϸ���ֽ��������ɿ�','image/product/4.jpg',
'image/product/4-lg (1).jpg','image/product/4-lg (2).jpg','image/product/4-lg (3).jpg','image/product/4-lg (4).jpg','image/product/4-lg (5).jpg',2);
INSERT INTO product VALUES(null,'����±�����ϰ�',6.8,'����±�����ϰ� 50g','һ����±�������е�����','image/product/5.jpg',
'image/product/5-lg (1).jpg','image/product/5-lg (2).jpg','image/product/5-lg (3).jpg','image/product/5-lg (4).jpg','image/product/5-lg (5).jpg',1);
INSERT INTO product VALUES(null,'�Ĵ����Ŷ�������',9.8,'�Ĵ����Ŷ������� 80g*2','��������Ÿ�˵����������ζ����','image/product/6.jpg',
'image/product/6-lg (1).jpg','image/product/6-lg (2).jpg','image/product/6-lg (3).jpg','image/product/6-lg (4).jpg','image/product/6-lg (5).jpg',1);
INSERT INTO product VALUES(null,'�������',27.9,'�������140g*5��','ŷ���Ƕ����ܲ��˵�������ζ','image/product/7.jpg',
'image/product/7-lg (1).jpg','image/product/7-lg (2).jpg','image/product/7-lg (3).jpg','image/product/7-lg (4).jpg','image/product/7-lg (5).jpg',1);
INSERT INTO product VALUES(null,'�춹+޲���������',19.8,'�춹+޲���������','����ϸ�壬������ʪ�ó���','image/product/8.jpg',
'image/product/8-lg (1).jpg','image/product/8-lg (2).jpg','image/product/8-lg (3).jpg','image/product/8-lg (4).jpg','image/product/8-lg (5).jpg',1);
INSERT INTO product VALUES(null,'�Ϸǽ��� ��������',15.8,'�Ϸǽ��� �������� 2��װ','��������Ÿ�˵����������ζ����','image/product/9.jpg',
'image/product/9-lg (1).jpg','image/product/9-lg (2).jpg','image/product/9-lg (3).jpg','image/product/9-lg (4).jpg','image/product/9-lg (5).jpg',3);
INSERT INTO product VALUES(null,'���Ϻ���ľ��',10.8,'���Ϻ���ľ�� 80g*2','�������ζ��Ӫ���ḻ','image/product/10.jpg',
'image/product/10-lg (1).jpg','image/product/10-lg (2).jpg','image/product/10-lg (3).jpg','image/product/10-lg (4).jpg','image/product/10-lg (5).jpg',3);
INSERT INTO product VALUES(null,'�����',35,'�����18��װ','�Ե�����ˮ��������','image/product/11.jpg',
'image/product/11-lg (1).jpg','image/product/11-lg (2).jpg','image/product/11-lg (3).jpg','image/product/11-lg (4).jpg','image/product/11-lg (5).jpg',3);
INSERT INTO product VALUES(null,'�������������',30.8,'�������������15�� 5������','�������������,���� ��ժ�ַ�','image/product/12.jpg',
'image/product/12-lg (1).jpg','image/product/12-lg (2).jpg','image/product/12-lg (3).jpg','image/product/12-lg (4).jpg','image/product/12-lg (5).jpg',3);


--6,������(order_list):oid������ţ�(pname ��Ʒ��)��uid �û���ţ�order_time ����ʱ��,(ppic_sm,)pid ��Ʒ��ţ�ocount ��Ʒ������
--
--create table order_list(
--    oid         INT PRIMARY KEY AUTO_INCREMENT,
--    pname       VARCHAR(100),
--    uid         INT,
--    order_time  DATETIME,
--    ppic_sm     VARCHAR(100),
----    pid         INT,
--    ocount      INT
--);


INSERT INTO order_list VALUES(null,'�����н�С�����',1,now(),'image/product/1.jpg',1,2);
INSERT INTO order_list VALUES(null,'�������������',3,now(),'image/product/12.jpg',2,12);

7.������(talk):tid ,tinfo �����飬ttime ����ʱ�䣬tpic_lg,tpic1,tpic2,tpic3,tpic4,tpic5,tpic6

create table talk(
    tid       INT PRIMARY KEY AUTO_INCREMENT,
    tinfo     VARCHAR(100),
    ttime     DATETIME,
    tpic_lg   VARCHAR(100),
    tpic1     VARCHAR(100),
    tpic2     VARCHAR(100),
    tpic3     VARCHAR(100),
    tpic4     VARCHAR(100),
    tpic5     VARCHAR(100),
    tpic6     VARCHAR(100)
);
SET NAMES GBK;
INSERT INTO talk VALUES(null,
"��ζ���������⼸�쿴���˳����Ϸ��۲��ˣ�����������Լ��󣬳�һ���¶ǣ��ù��ǡ��������Ϸۣ�����һ��â�������Ի���һ�����Ϸ۵���",
now(),"image/discuss/2- (2).jpg","image/discuss/2- (2).jpg","image/discuss/2- (3).jpg","image/discuss/2- (4).jpg",
"image/discuss/2- (5).jpg","image/discuss/2- (6).jpg","image/discuss/2- (7).jpg");
INSERT INTO talk VALUES(null,
"7.11 ���#��������������ĩը���桢��ե�Ĺ��ܹ�֭��ţ�⿧ଶ�������û���þͿ�����!",
now(),"image/discuss/2- (54).jpg","image/discuss/2- (54).jpg","image/discuss/2- (55).jpg","image/discuss/2- (56).jpg",
"image/discuss/2- (57).jpg","image/discuss/2- (58).jpg","image/discuss/2- (59).jpg");
INSERT INTO talk VALUES(null,
"#������Ͳ�����#���Ͱ���+ˮ��������+��������+���Ҳο����䣺18�������ϡ�ӭ������ǰ�У����õ��µ��¡��簲",
now(),"image/discuss/2- (23).jpg","image/discuss/2- (23).jpg","image/discuss/2- (24).jpg","image/discuss/2- (25).jpg",
"image/discuss/2- (26).jpg","image/discuss/2- (27).jpg","image/discuss/2- (28).jpg");
INSERT INTO talk VALUES(null,
"���õ�����ӳԿ�ʼ",
now(),"image/discuss/2- (62).jpg","image/discuss/2- (62).jpg","image/discuss/2- (63).jpg","image/discuss/2- (64).jpg",
"image/discuss/2- (65).jpg","image/discuss/2- (66).jpg","image/discuss/2- (67).jpg");
INSERT INTO talk VALUES(null,
"6.19 ��͡�?������Ȼ�벻���ȣ������Ǻ�ϲ������Ϊһ�п���������ô���ޡ���ô��������!",
now(),"image/discuss/2- (36).jpg","image/discuss/2- (36).jpg","image/discuss/2- (37).jpg","image/discuss/2- (38).jpg",
"image/discuss/2- (39).jpg","image/discuss/2- (40).jpg","image/discuss/2- (41).jpg");

8.���۱�(comment):uname ���������ƣ�ccontent �������ݣ�tid ���۶��� id

create table comment(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    uname       VARCHAR(100),
    ccontent    VARCHAR(100),
    tid         INT
);

SET NAMES GBK;
INSERT INTO comment VALUES(null,"����ʳ��־����","����������",null);
INSERT INTO comment VALUES(null,"�����ҵı���","��ζ�޷��赲",null);
INSERT INTO comment VALUES(null,"Hellobaby��ñ���","����������һ��",null);
INSERT INTO comment VALUES(null,"��ʮ����С����","�������Σ���̫�ó԰�",null);

9.���ﳵ��cart��
CREATE TABLE cart(
    ctid INT PRIMARY KEY AUTO_INCREMENT, /*������*/
    uaccount VARCHAR(100),                          /*�û��˺ţ�*/
    pid INT,                             /*��Ʒ���*/
    dishCount INT,                      /*����*/
    ctime    DATETIME
);
SET NAMES GBK;
INSERT INTO cart VALUES (null,'zhibao',1,3,now());
INSERT INTO cart VALUES (null,'benben',2,2,now());
INSERT INTO cart VALUES (null,'baby',3,1,now());

9���ҵĶ�����myorder��
CREATE TABLE myorder(
    pid    INT,
    uaccount  VARCHAR(100)
);
SET NAMES GBK;

select p.pname,p.ppic,p.pid,c.ctime,c.ctid from product p,cart c where c.uaccount='benben' and c.pid=p.pid;


INSERT INTO myorder VALUES (1,'zhibao');
INSERT INTO myorder VALUES (5,'benben');
