'option strict';
module.exports = {captchaByImageHash:getCaptcha};

var crypto = require('crypto');

function getCaptcha(body)
{
  var md5sum = crypto.createHash('md5');
  md5sum.update(body.substr(body, body.length-16));
  var hash = md5sum.digest('hex');

  var index = parseInt('0x'+hash[2]+hash[8]+hash[10]);
  return cache.substr(index*4, 4);
}

cache='urdbkxhj    hzacbaxm        lhqvfkdxenjsevuepqgg    dcgjkkpv        tjvbxmdb    mpdu    zacc    savzpgiz                urshxzmtlqberdfebheftfbo    etta    fhpm            sgtl    spaa    fxsx        ptqi    xfrr    ndps    xkcg            ritckskaejkk        rufd    tkgvjazesmbd                ktcr    vlcs            zkbzrjbxbmvafjdxsehgiujiprfqiritehzstjrevden        uvjpbgai    sgeftnfefbqogmphvdplzdpndjfa            tsufsojo    sddgxqpqamvs    evufacxo    axtrfdhslfbd            ezdk    fxlg    jldf        ljsbviub        rpse    mxbqvbiqpcjs            thprmfvl        sbhs    pfjvzbdessmksdjf            xgfzvorjexjvdzkkpmbc    dcbl    sjvzspzp                dcrt    uaxk    bdnfafpumalaobbpoezqtehx        gppp            lhracucfxuau    izbl    afvpndqh    kcppuqqgxdfxfmpkrjqg    rtubvqrrfucqqbge            kpgo    veku            qolxxejg    ttka    nxbg    eueo                    ugov        rrdh                xzqtarls        hjrzchgj        ritu        xsae            tfgflcoblfkdnblljmmvmdcs        hfbm    drdmhihp    muic    mrehcusv    vdpjqnsaogxk    pamf        brcnutvs        ddzeelxsguzhmeusmdbj            ojkcekxk    tzgi        idzx    bcidkmec        tpoa    dddgtmuaoasb                tzvl    qxeulemukuor                    brhe    tdcggbedzfjptsbdxgba    ppvt            avidmzjv    pbch            sfrvhpkdpvzb    jzgxkczj    bork                feff        cbzc    hdih    oedrvhegktdp            vtqp            hruubdll        aupnsmvqbixmjhun    pamqsobi        hghv    uljm    qbggcacnrlumnalvqvmt                            adtf                tqnc                zjcsxgrrhbzxrcgf                jhqinnln        nihedpinpvndcjsz        jgkcoztdkriqxjfc    gcor        qjvvadfm    zscu        rdvt            oujp    dbnfijvevhvz    kqmcnglo        jatijmqfdxdvftzv        fphhqgvkhhvi        msgk        dqeg                    sxcvfiqd        ekkm    uhzvmbqjgifj        ibrv        ugdi    ckuacrmetuld    qpadjrcr        sgkz    zkdblvsmktjdehkppxkuzgjdfcqs            fjbajxkkojatzcttofah    hfrjcvcq    vnhn    cmuq        jsdjdkmr            gzrrcrtghtbxvfrgcoqj    gvko    sbucxskuxzje        rjghihch    qcac    fzkjzaizchrlvgzmkxrk            uhvqbhxtglbxmxpgolorspfjqbgzfhqk        fgsczvxx                    zeaojfcp                                        tzeqcikxrhuiihau            zrtp    okepeqnbbhkcagvr        thbc    fpsgpeah            apqkblqk    cdsjutfr    zlab    qmsgsasspzqrdxgo                    dcmvrovtbbqp    mtxvxcgxgrivbrbtnpbfpvhierkhlghqphdfibmj                            svsfxbtjrirdhvvjrqvm    kbkibtqtudpq    vaqacsff                                mstq    uokk    dezsqzicuece            gptn        hcajhuah        ztja    jdcltstm    xaea    qfekdvpkqokp    kuhsjusazhcbejdttvlk    puvebeus    nkfferzbzxns        idgmzxbmmhjnzvzpcquchqbbecasjzgq        chqn    txiq    rhptzdvj    ikat        qaxtzxqqbcdb    fgqc        gpmuetdz        pzon        dekt    xbkt    scrgdcnoactoedjrmsatqdnhjxaojbve    xqdplzcejfubzzve    ehqd            glfhfpah            btkl                gvcg    rpgh                            bjvl        dgzkaqek    exisuljarkgieqjtcokt        tzca        qmslrxzgtaft        bhef    zbjancxh    bpvfbapp    hbpvxvdplqlhpobfqmtr    alxj    golpfrxpjoxdalruzckvmodpzfcartlsfenq            vrdcxcnarejq    fabm            qoeagfprzihz            chblujdq    gdukuudm    vumcgxcmveecqujm    bzcc        mihb    msguftctsffpxhsdqsuhvhjrtizs            jpfo    emlijdfjhjuaosnsbkkb            bgmd    txcbzfbepcvcfhhgpucurgrtkbph    veeasame    sxsnjsni    lgmd    qfpo    jbohuoslusbcbczdmczb    hkxjfxkt    rddafnqx    amul        mpxpmome                        xfkkiedmlzts    pnab            btvbkskx    zhlmpaed    rkgg    zzzesxdoffidznjd    vtdm                        dejt    qonzzpthvtrf        hmrjkshvvkfh    zcee    zbzk    tzfo    rjvzzacekhgc    jchj        qmrf    dmgf        ozqa    mbubgeoptreoqrxg        nslxkffahsqd    drmammhiemonzthx    zthfgexk    hiuq    arob    sdjzvvvaamhjdkqg    jhvbkfdjsqndelsqbtftadrozfaj    rpjh    buej            bvxarftmvrgadhga    bpqxkvdg                                        ueov    zmqcupxoihki    muvm    xvufjpxg    ckua        pbqczfxg        aoio        giaeojbv        tmefprmmlmpa                mucm    otoostha            cxfn    iszqxpsa                jzpdtkht    etot        vvjcvgbhthqpkvrk    glbd    zohzbcif    jtfjfmkckdhcxzsuavejmjmtxtmakthuccrqbvxa            cauk        khehkxje    aqhvgqbzlcvp            hvin                gbdh        pdee    uzhvlzpj    lfao        ubjj        xjtsjejbtlzr    ahrjkrpc        ebre            mdvv            bhpnduht        votdqbrajxze        vkbdvbfh            uqzv    ujvc        qhrsbrod        ilefhsrm    jrxb        rngprdgm    mauqhpfn    ovgh        jhjf            aruu        qmtk        xzze    mdpiqcjpdvsktadczpxk        xtux    lavx    umke        szeq    otedrgqqspbm    dhphgruk    dirsasbs    zdvfrchujjgqvcxjahxsllng    ivhxmaiodmbhsfst    vvbjapki    tuvp    zactzqlq        hbtv    ftpeqfuijodb    zukteble    mssu                    onqredax        szmgrqzi                    zrfuksgp        fthtdtdt    vmvg    bzrafemmorggiehm    jmdvnvxsxlekcsvtbcdjpkdflgra        cmcdtqhp            jntfgdbr        ummvacax    zievqjjq            szuxkepdufqspuve    dslaslcmgbjtvxtg    xpmxqrxg            dprc    xode    rbjt    dshtjpaaomdj                ezss        ztct    btqvldpzmrcf                        xule    ajmqhcev    ctniaixb    pzcnmgszlcmr    rpfo            fxknfidb    lcdmjrxbjdpffnqd    pdcjmelc        mhtgszzq                mqhscpunumdv    qfhx    idxk    flpbzgsjvflinnxptjfnxffu    rjol        rhhrekaqbxpj    ermubsjequsjxsmzqtqq    btgjtrhplupj        mhbg    pvkj    hpdtphixhehavcxs    msafphff        tjlgzpvr        jbje    zoak    ubdz        vsparmcpzapx    psrxakcmpsse    dcvbgmap    bdhfrhmdakhc            ehxh        crzh    bjvm    jgcsbpddepxezrvx        pfgz    rqvb                aorocefa                kldovefrxczreatptmsjbhxefdcxjmpsuvxqjndhhcjb    iedfqdpximeodccp    oqqeldjn    nxtx    lmfcgtkv                    bjhj        rmbthxokcbmxshojfvpv            gjve    vxog    gkmz    iocjicuadivsqtkmkhmhmogkazpsrpfs        teej        qsfsftja            jszg    rkxf    ckgt    kdksvokt            knqpulorbttfrmdstfff        nzjf    opbdquok        svbqkhaj                qacq    ikeeuqtz    vjxqnmsmxambxjji    gaivxqemjbdvikvhrtapsjgi    flhddbzp        oeav        vmrt    pgfbxbgo            geknshgnsxgjjusmchqzpzqtcznicdbe                        jzebrkcl    zdgv    dnrh            toxebmfmkacbqjocmsbazrspgdkzckmtmncg    mucegfxlprpv        mbmepsrihmpm        zjhm        scqf    tpczrzpa    gpbdbjnffgqtqaipukcmkukxxkbt    xubszunf            dzkk                ifnb    odjzohvrjdoucgvcncfv    xqrg    ixgidvzzkxht    rphp            qjnm    pbmr        spdc        rguepssz    pfqdttsjrgerqokivtgv    eimrempd        fjfgqbgzbkaq    uxhv    qxaqzmrrccfm        spkt            khmoqqzt    gaoqbtxa    cjdfkkgvpipu    hsam            hgeu    jbgsvisp    pfbexebxiaxs    jjkikhvdmxxx    jxuk            ktpdokkptrlbxkcobuqldvte        aedq    xcvelgzflghaueptcqhopvtz                unlpzdsz        vsvq    azgvtmdkusff        msdrlvsflqks        acmdcotszprc    zkrp        bgmr        ghngegccdhprckzzcpsmjkanrbvl        mcvhskjtfjapuaspdmaxfjje    htotffff    lmkodnoa                uzapmzvmsgluzsbm    soqgsavu            rsgh        xzha                    jxmqtkggtsfa                        krsj                tulksxehutxddpms    ebvq        seeegrakqcok    qbga        sqbigbio    bpde        test    pbfa    cifghrfmzgksbcehcuks        vadq    dzqggoccsvdbmfga        juec    ekdzuhxjhmaxeqfagpmu            zsvgqxgxkrdm        pzkvpqrc        cuit        pfrbvmhq    aoue    tgzn    gzuk    gzmlvfdvfzgu    qlhkfgrz        vpsb    bxjnufgx    zdcsipgz    eihqkpqsptctfzudvmsicjaz    memz    fati        oihb    bcrk        dkpjjqchthvqfzhhtadc    hqdc    hujohxzv    prdk    ugurcqmo    ifex        prmzinxejxqs            zihm    uxmg    hxcv    gxmf    rxausmlj        pefceamqrfok    sdmocast        zaishmzlmofthcajahtxdrdxtacz    aeedcqkldxvt    hhspzemkgrhq        kxcx    booqogdj            ejfb    izmh    bgkpbrnu    hzuo        zcrjerufrqxjunfexnxpkdhm    lartrrasflip    jriapqpq                zxoa    xpjhsuzoqjxd        jjlqavhp    kbbx    opvabexntjpk    adubssgr    apbz    rojoafqrfmuo    jsqt            abad        etkejxzx        mkjxhita    zhdt    jfafdzrs    rjxkxsnosxfzfpzztxacgrgt        ejlrbqzabvss        nndc    lsuseaqx    hoag        cnzb    xpqj                bdjngcmfmxgfvdca                    ugcd    hivb    rifdgksfdqkhccja        gscvfubmtzvv    fjdsrrlg    bxhpdiej                oqai    jmareqtatvzh        eqkqpedvzmpj    tkbp    lssf            nxjdcanpupdlcate    jiht        eivp    ktkbjoxe    mzgmrhpr    vefj        dmkc                    lxtb        ltvirjhz    gvkldmttakjs    mgmrhvpu            dtokzgzoaxju        vgvrhzblsxmtpbchdbxz    ppef                qpcb        cxfd        csbf        xmjp        sjptkqmr    vdzqfedp    esvdzkdc            srja                uthtxicxgkmz    jhggkmqsecbgagllhsaf        htov    qzcd                uude        mxtb    tdvsfvjxsrktbjut    hoha    kmri        fmvr    rmqgnxjl    peib        vrishfpq    peaqlrivxhjj        pifb    prsznzxavvifxnhhbmerzzbtelootqmz    kpjjrzcv    drqp    mrmu        rqkjxnbbrphfscgnraevrzbmqahpveia        tcfuaszh    sssu    jjadkavejqco    jvrqtlzf    sckq    ekkfkdbl        cmdc    bmscrtkp    azhp            ooqqxksrlrtjsngj                        mdtn    feqomrbz            dqlv        bnfoljgmqmqa    zthrzrjkvfsrbxrk    epiaksbkpalu    mftv    qpxlqsadvhex    zvbhimrjffdf    hmbmkmqespskkvcubbsdbstc        frop    rfjoetvcrpqvjadtetcmcqlzjxst    xhobvgud    mdac    ttakvmpjtxbt    eszammut        erfcscogaksxxzex                        amhv        rogxzhzf    sbjedorp        rhdpzrqxvxtsfsjrvmkd        vfcp        sqcesczibgjagjpabvoz    bloz    hkqsmldx    vvur    bijqdexg            sjbx                    jrqjmokfvriibjbfbagpbbuvqupnqovf    sbfdaxxvvgkmiprndzak            rtug        amnhcifvsubu                atgk            qssldngucopuamfevqaggmtrfarhhpfd                    drrf    aqeh    hxpb    sbujzzbsfupvdphs    xsnhgdmsfjvezzezojcrophxuopvcvdnjfft    dhmm    fxup        hhcb            gqjf    ksdmjvgrkijh    hxfxjqpvdcvk    xtfjgbqsfdhpanst    eviuapnd                ecxetdje    xosxgvgahazxsvgmbzcs    ksgk    rtsm    dfrt    xcba    coqfhagppmmaxvau    lrxokgqi                ggpd    tqfmtdbx    axpp        lsgodsuijttv    rasdzjqq    vgmckpjeqfzsdbhqvvofpjjp                omkt        fzfr    utmcnuhk        qrft    xcivrarf    gmjozmvh    gkpzukkhmjorrorjzfba    cxud    blmi        zqsq        tzdsrrtrkedrtscu        xjralurvtoom    dzejpbfjzftfhlxs    ofavieah    xdxdzbau        npmg    uaaj        vxlg        gjuh    mvlt    vtpfcmgr    hvkc    luab    vapthevk        lotg    itdkskafamfvcxfv    rzds                mkkx            zlfz                    grkgctdmohpmsioe    muppzhus        tozu        pqbvhmbb    qdbo    qhopeddgqbst            pjbrzqzzcfodoupxmjsusvbpjraohziltxzfpxbk    vggj    tfeh    svcnxvzz    svlf    xgtscthnzdab        pdff    aegkdsbqkfdttjrj    kmqgsitgqqbq    jxhrqrzbvvab    mzsppofsksgkqugh        fbknzcsjbakb                nqto    gbooqsrj    pmrb        xssb    iqcsuksdxhtfttmxcznthhhzmzhncoutvlvhgaxkdfxfecad        qgortadr    qqckzjrqjqkb    angsivcxfhbo    kphoareacmmjqtdgvgipktxqpdrdjzzzhzoagrvzfijv            vooffpct        xspkzoscbxov        mxvc    rpsq        mgvftmsjqzijzrslfcxtvnhz        uljozsjrmvfv    kkkzsdhj    aqujcfabmxuauxcg    axvvlbkz    fcuqazjpcbkhuqqinffkrvlbeulf        cnqhhmhzqsjvqdpgazem    bdsr    azpkrvof    agxr        mtegfgsrsnbl    iodx    aqxgavbe        ojvv    umhf        livn    dfknqkpavxfxmjti    jtssvjxftedrslqfmlbjcbgjotkf    qvcsbzsjgsjn        skjtmfkskvkg    rtgzbmfo        bardmftteacf    cnsz    fotb        sntd    ogkekumt    gaxf        sqqt        xzkgorajfkgv    esvd                elaqtqqkeketpqqz        xmzv    vbuo    paairztvttgdsgso    ktghzrvkfhmdkzjf    veqlceamvtsz    zvab    ktve    extenech    kssb    lzqaolpg    timdvxjmvcxf    dbak    cbtb        evrl        npmo            rvmx    qkhxdooh                    tunxshof        xqbvijgdfrummtmvvzcarkxcssxn            qqjs        tpppjlkc    jbfjjfxzoqldpgpd    hquufjjpvrumzqzxvtqx    jvzocvctmubp                ppzsutuhueao        dckasxtj        xkctfqdh            bqob                tutf    zfjfqiheraha    hqpe    xtezizsa    dgioekkcjqzsxzvc    jvfhtgpl        kzvieqthvpseqvfc    hlxdjuzc    posmsdam    lglm    exis                jxgv            juce    mitjqnetmdub        vtdpgfvq    bbrh    rfnu        zbet            fmoa        fsqgcpmm    skthgdrb    aediksgkhrjv    nvmqbuzh            svjorhfkmxrfqmgstxim    cgev    nmmz    ocdf    ossk        zxcjrjkzhtjghdst            ouzb        zbfjzkzz            pasrmjtm    dnbsdduh        hxhrecmhpgcd    vczshibv        gqgqznxg    magtxsghfgaighhp                    jhmjrjdzhzqc        vihaqcdz    alafgatp    qmpfzfatpvtudsnnknzfgkaf        oipc    mbokrtjc        umvrziqm        vgpm    bkce    supx    hxshjgaj        bbmkjbmjixed        donq    mqza    zjqpcvfs        lsgvdqpqpbggkqpdzurd                hjvtbqeg    ervb                    aufl        zula    aptvpifb                dmjuqehjbrhsitmh        mztdpktd            qkevetzdmuzjjdhd    mfqorzhccjmnvdvc    eksg    qbuq            jexg    igij    aqhf    hezg                    sqvrpxhehooi    ajtmdtaafvppphul    ahgalkzfmzkn    nnmhmshgjomjavvjsgeisjzm    ksmstbtdsunbrqrfdlfm            xnbchmctpnabhbfmfhpb        gssz    qsxu        rrxdpgspnzjivhheiqzfbsheqsjvdakrnbcmpacu    rpaomzop            qptahrdgvcxjqgrbszoz    vqjz    bcaspsiujkmcxkkcjaqz    mgtfvdnc                gkgxzqlokpabgidntzxvvbiktxkj    fldbttndrljhikdetriz    dfom    ebmhzede    rmoj    eatkcfag    mzgmrzhcbkelbutefzlxcbkrbpaucstj    btft        tsrx    deru    vpuigxbdcasf        jblp    msuq    ktijhqvqtmbazxfzltbrbzgtcrpv                qfkjfvrmzqtf    qhjprtoz        jtinrbhdtsvjxovlvmbt    jaehedth    umboschp    tvva                cqhp    xshnssdd    adnl            erhpvvxn                xtlq    edptsgxzhxrturqh                    czopxkte            xdjc        akkceige            ajmx                    examhepa    szquheqt        xcbnfrhevxjbicvx        jmldkovmzeic    kjmatpeqaqvapcro    udmk    sutc            grkg    xjlk    scpl    fmpkiihk    akoa                    hkzp    pidmuask    xjxv        zsjz    sxfb    zbvx            vxxscvctqjoh            vbsq    zedx        gjpvukufmklcvcbv    mbhp    shtgixdimlkrecztzjuzsuso    xttnzaxd    drmxiauh    vvxm    bxzffsezbtge                    distuzssrdudqexhtibb                    uftkrazjbqjgcqseinuk        asth        bhgm    aobk    hjqpfbrg    tmxttqmj            obbh    qaoz            zicz    bmgb            cksdrrjz        zcdg    hosr    nsff    jqmbotshejdprrumqchb    josc    rnxx    qmvx            mxum    qugmpxps            xsndsxxbszjnmtqpmmta    thlqtrbg    knoa    ougs        kkxz                jfkepmxv    kjmaqgqm        ljtdqfgs    bztfospvgmepmfsceguokfjz    bjso    pkrs    gpoksbaqbzpv    skkxeefhopioahuj            hapnkcqcbpzm    kbsaasrqsfvrspeagpbm    ecturgdxpembogqpgilebdevfjfgmfva    umxtpcxh            rxeusmketvplqzzj                    lizt    aqhm    atfh            qaivgovv    gjsa            uqpvvbqv        eaqexaevaeupthxvkmqbofkr    pkem                degl    hixz    cedf        pigk    szktocbt    exbv    uncj        fepnxmacebteirftxxrugdbt    qsdf                axkkgrdvgpdfvehrrkvmfqoeeqbbsppsevat                    qlkdkudh                        ogrkcdaguvctqacpmbrgzabsjupggmtt    fvvu    cmzvfmkh    zbksxjmu            oshmbmae        ejjx    maeozxah    mgtx        mntotfvsmqml        extcrkrjjzxq        ahtd    fvoqqsgz    pjtp    pblafrthbfnjbhou    demf        edom    iuqrnxcr    docv        iahjfkzm    vjxz            djvaqaocoarveeki    ftah        gffdkaafstfd        fbdl    rxbtkzblpxzhqcukjjqh    jqbxzaxi    ukrsdaaztvfaggbovdqk        nzsebakd                jzei        ktdz    manhkmnc        ahrxuhax    ozrl    utipkhxmanpavbdzmjnv                prrxszofeczdlzicqeib                sxmacgod    qkexvzkscoax    feqspaxghgjm    icgd    ';