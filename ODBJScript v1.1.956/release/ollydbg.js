const TEXTLEN                  = 256;
const ARGLEN                   = 1024;
const USERLEN                  = 4096;
const SHORTLEN                 = 8;
const BLACK                    = 0;
const BLUE                     = 1;
const GREEN                    = 2;
const CYAN                     = 3;
const RED                      = 4;
const MAGENTA                  = 5;
const BROWN                    = 6;
const LIGHTGRAY                = 7;
const DARKGRAY                 = 8;
const LIGHTBLUE                = 9;
const LIGHTGREEN               = 10;
const LIGHTCYAN                = 11;
const LIGHTRED                 = 12;
const LIGHTMAGENTA             = 13;
const YELLOW                   = 14;
const WHITE                    = 15;
const MINT                     = 16;
const SKYBLUE                  = 17;
const IVORY                    = 18;
const GRAY                     = 19;
const NCOLORS                  = 20;
const BKTRANSP                 = 0x00;
const BKBLACK                  = 0x10;
const BKGRAY                   = 0x20;
const BKWHITE                  = 0x30;
const BKCYAN                   = 0x40;
const BKGREEN                  = 0x50;
const BKRED                    = 0x60;
const BKYELLOW                 = 0x70;
const BLACKWHITE               = 0;
const BLUEGOLD                 = 1;
const SKYWIND                  = 2;
const NIGHTSTARS               = 3;
const SCHEME4                  = 4;
const SCHEME5                  = 5;
const SCHEME6                  = 6;
const SCHEME7                  = 7;
const FIXEDFONT                = 0;
const TERMINAL6                = 1;
const FIXEDSYS                 = 2;
const COURIERFONT              = 3;
const LUCIDACONS               = 4;
const FONT5                    = 5;
const FONT6                    = 6;
const FONT7                    = 7;
const MAINFONT                 = 8;
const SYSFONT                  = 9;
const INFOFONT                 = 10;
const ADC_DEFAULT              = 0x0000;
const ADC_DIFFMOD              = 0x0001;
const ADC_NOMODNAME            = 0x0002;
const ADC_VALID                = 0x0004;
const ADC_INMODULE             = 0x0008;
const ADC_SAMEMOD              = 0x0010;
const ADC_SYMBOL               = 0x0020;
const ADC_JUMP                 = 0x0040;
const ADC_OFFSET               = 0x0080;
const ADC_STRING               = 0x0100;
const ADC_ENTRY                = 0x0200;
const ADC_UPPERCASE            = 0x0400;
const ADC_WIDEFORM             = 0x0800;
const ADC_NONTRIVIAL           = 0x1000;
const ADC_DYNAMIC              = 0x2000;
const PLAINASCII               = 0x01;
const DIACRITICAL              = 0x02;
const RAREASCII                = 0x10;
const MAXCMDSIZE               = 16;
const NSEQ                     = 8;
const NMODELS                  = 8;
const DIA_ASKGLOBAL            = 0x0001;
const DIA_HEXONLY              = 0x0002;
const DIA_ALIGNED              = 0x0004;
const DIA_DEFHEX               = 0x0000;
const DIA_DEFASCII             = 0x0010;
const DIA_DEFUNICODE           = 0x0020;
const DIA_SEARCH               = 0x0040;
const DIA_HISTORY              = 0x0100;
const ANIMATE_OFF              = 0;
const ANIMATE_IN               = 1;
const ANIMATE_OVER             = 2;
const ANIMATE_RET              = 3;
const ANIMATE_SKPRET           = 4;
const ANIMATE_USER             = 5;
const ANIMATE_TRIN             = 6;
const ANIMATE_TROVER           = 7;
const ANIMATE_STOP             = 8;
const NBAR                     = 17;
const BAR_PRESSED              = 0x01;
const BAR_DISABLED             = 0x02;
const BAR_NOSORT               = 0x04;
const BAR_NORESIZE             = 0x08;
const BAR_BUTTON               = 0x10;
const BAR_SHIFTSEL             = 0x20;
const CAPT_FREE                = 0;
const TABLE_DIR                = 0x0001;
const TABLE_COPYMENU           = 0x0002;
const TABLE_SORTMENU           = 0x0004;
const TABLE_APPMENU            = 0x0010;
const TABLE_WIDECOL            = 0x0020;
const TABLE_USERAPP            = 0x0040;
const TABLE_USERDEF            = 0x0080;
const TABLE_NOHSCR             = 0x0100;
const TABLE_SAVEPOS            = 0x0200;
const TABLE_CPU                = 0x0400;
const TABLE_FASTSEL            = 0x0800;
const TABLE_COLSEL             = 0x1000;
const TABLE_SAVEAPP            = 0x2000;
const TABLE_HILMENU            = 0x4000;
const TABLE_ONTOP              = 0x8000;
const DRAW_NORMAL              = 0x0000;
const DRAW_GRAY                = 0x0001;
const DRAW_HILITE              = 0x0002;
const DRAW_UL                  = 0x0004;
const DRAW_SELECT              = 0x0008;
const DRAW_EIP                 = 0x0010;
const DRAW_BREAK               = 0x0020;
const DRAW_GRAPH               = 0x0040;
const DRAW_DIRECT              = 0x0080;
const DRAW_MASK                = 0x0080;
const DRAW_EXTSEL              = 0x0100;
const DRAW_UNICODE             = 0x0200;
const DRAW_TOP                 = 0x0400;
const DRAW_BOTTOM              = 0x0800;
const D_SPACE                  = 'N';
const D_SEP                    = ' ';
const D_BEGIN                  = 'B';
const D_BODY                   = 'I';
const D_ENTRY                  = 'J';
const D_LEAF                   = 'K';
const D_END                    = 'E';
const D_SINGLE                 = 'S';
const D_ENDBEG                 = 'T';
const D_POINT                  = '.';
const D_JMPUP                  = 'U';
const D_JMPOUT                 = '<';
const D_JMPDN                  = 'D';
const D_PATHUP                 = 'u';
const D_GRAYUP                 = 'v';
const D_PATH                   = 'i';
const D_GRAYPATH               = 'j';
const D_PATHDN                 = 'd';
const D_GRAYDN                 = 'e';
const D_PATHUPEND              = 'r';
const D_GRAYUPEND              = 's';
const D_PATHDNEND              = 'f';
const D_GRAYDNEND              = 'g';
const D_SWTOP                  = 't';
const D_SWBODY                 = 'b';
const D_CASE                   = 'c';
const D_LASTCASE               = 'l';
const TY_NEW                   = 0x00000001;
const TY_CONFIRMED             = 0x00000002;
const TY_MAIN                  = 0x00000004;
const TY_INVALID               = 0x00000008;
const TY_SELECTED              = 0x80000000;
const TY_REPORTED              = 0x00000010;
const TY_REFERENCE             = 0x00000020;
const TY_ORIGIN                = 0x00000040;
const TY_STOPAN                = 0x00000080;
const TY_SET                   = 0x00000100;
const TY_ACTIVE                = 0x00000200;
const TY_DISABLED              = 0x00000400;
const TY_ONESHOT               = 0x00000800;
const TY_TEMP                  = 0x00001000;
const TY_KEEPCODE              = 0x00002000;
const TY_KEEPCOND              = 0x00004000;
const TY_NOUPDATE              = 0x00008000;
const TY_RTRACE                = 0x00010000;
const TY_EXPORT                = 0x00010000;
const TY_IMPORT                = 0x00020000;
const TY_LIBRARY               = 0x00040000;
const TY_LABEL                 = 0x00080000;
const TY_ANYNAME               = 0x000F0000;
const TY_KNOWN                 = 0x00100000;
const TY_DEFHEAP               = 0x00020000;
const TY_HEAP                  = 0x00040000;
const TY_SFX                   = 0x00080000;
const TY_CODE                  = 0x00100000;
const TY_DATA                  = 0x00200000;
const TY_IMPDATA               = 0x00400000;
const TY_EXPDATA               = 0x00800000;
const TY_RSRC                  = 0x01000000;
const TY_RELOC                 = 0x02000000;
const TY_STACK                 = 0x04000000;
const TY_THREAD                = 0x08000000;
const TY_HEADER                = 0x10000000;
const TY_ANYMEM                = 0x1FFE0000;
const TY_GUARDED               = 0x20000000;
const TY_PURE                  = 0x00004000;
const TY_PASCAL                = 0x00010000;
const TY_C                     = 0x00020000;
const TY_NOTENTRY              = 0x00100000;
const TY_CHARSW                = 0x00100000;
const TY_WMSW                  = 0x00200000;
const TY_EXCEPTSW              = 0x00400000;
const TY_RELIABLE              = 0x01000000;
const TY_GUESSED               = 0x02000000;
const TY_BELONGS               = 0x04000000;
const TY_RECURSIVE             = 0x00000100;
const TY_TERMINAL              = 0x00000200;
const TY_SYSTEM                = 0x00000400;
const TY_DIRECT                = 0x00000800;
const TY_NODATA                = 0x00001000;
const TY_DUMMY                 = 0x00002000;
const TY_NOSIDE                = 0x00004000;
const NM_NONAME                = 0x00;
const NM_ANYNAME               = 0xFF;
const NM_PLUGCMD               = 0x30;
const NM_LABEL                 = 0x31;
const NM_EXPORT                = 0x32;
const NM_IMPORT                = 0x33;
const NM_LIBRARY               = 0x34;
const NM_CONST                 = 0x35;
const NM_COMMENT               = 0x36;
const NM_LIBCOMM               = 0x37;
const NM_BREAK                 = 0x38;
const NM_ARG                   = 0x39;
const NM_ANALYSE               = 0x3A;
const NM_BREAKEXPR             = 0x3B;
const NM_BREAKEXPL             = 0x3C;
const NM_ASSUME                = 0x3D;
const NM_STRUCT                = 0x3E;
const NM_CASE                  = 0x3F;
const NM_INSPECT               = 0x40;
const NM_WATCH                 = 0x41;
const NM_ASM                   = 0x42;
const NM_FINDASM               = 0x43;
const NM_LASTWATCH             = 0x48;
const NM_SOURCE                = 0x49;
const NM_REFTXT                = 0x4A;
const NM_GOTO                  = 0x4B;
const NM_GOTODUMP              = 0x4C;
const NM_TRPAUSE               = 0x4D;
const NM_IMCALL                = 0xFE;
const NMHISTORY                = 0x40;
const SEG_UNDEF                = -1;
const SEG_ES                   = 0;
const SEG_CS                   = 1;
const SEG_SS                   = 2;
const SEG_DS                   = 3;
const SEG_FS                   = 4;
const SEG_GS                   = 5;
const RS_NONE                  = 0x0000;
const RS_INT                   = 0x0010;
const RS_EIP                   = 0x0020;
const RS_FLG                   = 0x0030;
const RS_SEG                   = 0x0040;
const RS_EFL                   = 0x0050;
const RS_TAG                   = 0x0060;
const RS_FPU                   = 0x0070;
const RS_FST                   = 0x0080;
const RS_FCO                   = 0x0090;
const RS_FER                   = 0x00A0;
const RS_FCW                   = 0x00B0;
const RS_FPR                   = 0x00C0;
const RS_FEM                   = 0x00D0;
const RS_MMX                   = 0x00E0;
const RS_3DN                   = 0x00F0;
const RS_SSE                   = 0x0100;
const RS_CSR                   = 0x0110;
const RS_CSB                   = 0x0120;
const RS_CPR                   = 0x0130;
const RS_ERR                   = 0x0140;
const RS_GROUP                 = 0x01F0;
const RS_INDEX                 = 0x000F;
const NREGSTACK                = 32;
const MAXCALSIZE               = 8;
const INT3                     = 0xCC;
const NOP                      = 0x90;
const TRAPFLAG                 = 0x00000100;
const C_TYPEMASK               = 0xF0;
const   C_CMD                  = 0x00;
const   C_PSH                  = 0x10;
const   C_POP                  = 0x20;
const   C_MMX                  = 0x30;
const   C_FLT                  = 0x40;
const   C_JMP                  = 0x50;
const   C_JMC                  = 0x60;
const   C_CAL                  = 0x70;
const   C_RET                  = 0x80;
const   C_FLG                  = 0x90;
const   C_RTF                  = 0xA0;
const   C_REP                  = 0xB0;
const   C_PRI                  = 0xC0;
const   C_SSE                  = 0xD0;
const   C_NOW                  = 0xE0;
const   C_BAD                  = 0xF0;
const C_RARE                   = 0x08;
const C_SIZEMASK               = 0x07;
const   C_EXPL                 = 0x01;
const C_DANGER95               = 0x01;
const C_DANGER                 = 0x03;
const C_DANGERLOCK             = 0x07;
const DEC_TYPEMASK             = 0x1F;
const   DEC_UNKNOWN            = 0x00;
const   DEC_BYTE               = 0x01;
const   DEC_WORD               = 0x02;
const   DEC_NEXTDATA           = 0x03;
const   DEC_DWORD              = 0x04;
const   DEC_FLOAT4             = 0x05;
const   DEC_FWORD              = 0x06;
const   DEC_FLOAT8             = 0x07;
const   DEC_QWORD              = 0x08;
const   DEC_FLOAT10            = 0x09;
const   DEC_TBYTE              = 0x0A;
const   DEC_STRING             = 0x0B;
const   DEC_UNICODE            = 0x0C;
const   DEC_3DNOW              = 0x0D;
const   DEC_SSE                = 0x0E;
const   DEC_TEXT               = 0x10;
const   DEC_BYTESW             = 0x11;
const   DEC_NEXTCODE           = 0x13;
const   DEC_COMMAND            = 0x1D;
const   DEC_JMPDEST            = 0x1E;
const   DEC_CALLDEST           = 0x1F;
const DEC_PROCMASK             = 0x60;
const   DEC_PROC               = 0x20;
const   DEC_PBODY              = 0x40;
const   DEC_PEND               = 0x60;
const DEC_CHECKED              = 0x80;
const DEC_SIGNED               = 0x100;
const DISASM_SIZE              = 0;
const DISASM_DATA              = 1;
const DISASM_TRACE             = 2;
const DISASM_FILE              = 3;
const DISASM_CODE              = 4;
const DISASM_ALL               = 5;
const DISASM_RTRACE            = 6;
const DISASM_MODE              = 0x0000000F;
const DISASM_HILITE            = 0x000F0000;
const DISASM_HLSHIFT           = 16;
const DAW_FARADDR              = 0x0001;
const DAW_SEGMENT              = 0x0002;
const DAW_PRIV                 = 0x0004;
const DAW_IO                   = 0x0008;
const DAW_SHIFT                = 0x0010;
const DAW_PREFIX               = 0x0020;
const DAW_LOCK                 = 0x0040;
const DAW_STACK                = 0x0080;
const DAW_DANGER95             = 0x1000;
const DAW_DANGEROUS            = 0x3000;
const RST_INVALID              = 0;
const RST_VALUE                = 1;
const RST_VFIXUP               = 2;
const RST_INDIRECT             = 3;
const MM_RESTORE               = 0x01;
const MM_SILENT                = 0x02;
const MM_DELANAL               = 0x04;
const MM_RESILENT              = (MM_RESTORE|MM_SILENT);
const NVERS                    = 32;
const JT_JUMP                  = 0;
const JT_COND                  = 1;
const JT_SWITCH                = 2;
const DU_ESCAPABLE             = 0x20000;
const DU_BACKUP                = 0x10000;
const DU_TYPE                  = 0x0F000;
const DU_COUNT                 = 0x00FF0;
const DU_SIZE                  = 0x0000F;
const DU_UNDEF                 = 0x00000;
const DU_HEXTEXT               = 0x01000;
const DU_TEXT                  = 0x02000;
const DU_UNICODE               = 0x03000;
const DU_INT                   = 0x04000;
const DU_UINT                  = 0x05000;
const DU_IHEX                  = 0x06000;
const DU_FLOAT                 = 0x07000;
const DU_ADDR                  = 0x08000;
const DU_DISASM                = 0x09000;
const DU_HEXUNI                = 0x0A000;
const DU_ADRASC                = 0x0B000;
const DU_ADRUNI                = 0x0C000;
const DU_SPEC                  = 0x0D000;
const MT_BACKUP                = 0x0001;
const MT_COPY                  = 0x0002;
const MT_EDIT                  = 0x0004;
const MT_SEARCH                = 0x0008;
const MT_DHISTORY              = 0x0010;
const WM_USER                  = 1024;
const WM_USER_MENU             = (WM_USER+101);
const WM_USER_SCR              = (WM_USER+102);
const WM_USER_SAVE             = (WM_USER+103);
const WM_USER_VABS             = (WM_USER+104);
const WM_USER_VREL             = (WM_USER+105);
const WM_USER_VBYTE            = (WM_USER+106);
const WM_USER_STS              = (WM_USER+107);
const WM_USER_CNTS             = (WM_USER+108);
const WM_USER_CHGS             = (WM_USER+109);
const WM_USER_BAR              = (WM_USER+110);
const WM_USER_DBLCLK           = (WM_USER+111);
const WM_USER_SIZE             = (WM_USER+112);
const WM_USER_FOCUS            = (WM_USER+113);
const WM_USER_FILE             = (WM_USER+114);
const WM_USER_HERE             = (WM_USER+115);
const WM_USER_CHALL            = (WM_USER+116);
const WM_USER_CHMEM            = (WM_USER+117);
const WM_USER_CHREG            = (WM_USER+118);
const WM_USER_CHNAM            = (WM_USER+119);
const WM_USER_MOUSE            = (WM_USER+120);
const WM_USER_KEY              = (WM_USER+121);
const WM_USER_SYSKEY           = (WM_USER+122);
const MAXTRACK                 = 16384;
const MOVETOP                  = 0x7FFFFFFF;
const MOVEBOTTOM               = 0x7FFFFFFE;
const CONT_BROADCAST           = 0x0000;
const STOP_BROADCAST           = 0x1234;
const BKUP_CREATE              = 1;
const BKUP_VIEWDATA            = 2;
const BKUP_VIEWCOPY            = 3;
const BKUP_LOADCOPY            = 4;
const BKUP_SAVEDATA            = 5;
const BKUP_SAVECOPY            = 6;
const BKUP_DELETE              = 7;
const MEMBP_READ               = 0x0001;
const MEMBP_WRITE              = 0x0002;
const MEMBP_SFX                = 0x1000;
const TR_HIT                   = 0x01;
const TR_SET                   = 0x02;
const TR_RTSKIP                = 0x20;
const TR_RTRACE                = 0x40;
const TR_TRACE                 = 0x80;
const HB_FREE                  = 0;
const HB_CODE                  = 1;
const HB_ACCESS                = 2;
const HB_WRITE                 = 3;
const HB_IO                    = 4;
const HB_ONESHOT               = 5;
const HB_STOPAN                = 6;
const HB_TEMP                  = 7;
const ATR_ADD                  = 1;
const ATR_ADDPROC              = 2;
const ATR_RESET                = 3;
const ATR_REMOVE               = 4;
const ATR_REMOVEALL            = 5;
const ATR_RESTORE              = 6;
const ATR_RTRADD               = 7;
const ATR_RTRJUMPS             = 8;
const ATR_RTRENTRY             = 9;
const ATR_RTREMOVE             = 10;
const ATR_RTSKIP               = 11;
const COND_NOBREAK             = 0x01;
const COND_LOGTRUE             = 0x02;
const COND_LOGALWAYS           = 0x04;
const COND_ARGTRUE             = 0x08;
const COND_ARGALWAYS           = 0x10;
const COND_BRKALWAYS           = 0x20;
const COND_MASK                = 0x3F;
const COND_FILLING             = 0x40;
const CPU_ASMHIST              = 0x00001;
const CPU_ASMCENTER            = 0x00004;
const CPU_ASMFOCUS             = 0x00008;
const CPU_DUMPHIST             = 0x00010;
const CPU_DUMPFIRST            = 0x00020;
const CPU_DUMPFOCUS            = 0x00080;
const CPU_REGAUTO              = 0x00100;
const CPU_RUNTRACE             = 0x00200;
const CPU_STACKFOCUS           = 0x00800;
const CPU_NOCREATE             = 0x04000;
const CPU_REDRAW               = 0x08000;
const CPU_NOFOCUS              = 0x10000;
const STEP_SAME                = 0;
const STEP_RUN                 = 1;
const STEP_OVER                = 2;
const STEP_IN                  = 3;
const STEP_SKIP                = 4;
const DASC_TEST                = 0;
const DASC_NOHEX               = 1;
const DASC_ASCII               = 2;
const DASC_PASCAL              = 3;
const FIRST_CODE_LINE          = 0xFFFFFFFF;
const MAXNEST                  = 32;
const VAL_HINST                = 1;
const VAL_HWMAIN               = 2;
const VAL_HWCLIENT             = 3;
const VAL_NCOLORS              = 4;
const VAL_COLORS               = 5;
const VAL_BRUSHES              = 6;
const VAL_PENS                 = 7;
const VAL_NFONTS               = 8;
const VAL_FONTS                = 9;
const VAL_FONTNAMES            = 10;
const VAL_FONTWIDTHS           = 11;
const VAL_FONTHEIGHTS          = 12;
const VAL_NFIXFONTS            = 13;
const VAL_DEFFONT              = 14;
const VAL_NSCHEMES             = 15;
const VAL_SCHEMES              = 16;
const VAL_DEFSCHEME            = 17;
const VAL_DEFHSCROLL           = 18;
const VAL_RESTOREWINDOWPOS     = 19;
const VAL_HPROCESS             = 20;
const VAL_PROCESSID            = 21;
const VAL_HMAINTHREAD          = 22;
const VAL_MAINTHREADID         = 23;
const VAL_MAINBASE             = 24;
const VAL_PROCESSNAME          = 25;
const VAL_EXEFILENAME          = 26;
const VAL_CURRENTDIR           = 27;
const VAL_SYSTEMDIR            = 28;
const VAL_DECODEANYIP          = 29;
const VAL_PASCALSTRINGS        = 30;
const VAL_ONLYASCII            = 31;
const VAL_DIACRITICALS         = 32;
const VAL_GLOBALSEARCH         = 33;
const VAL_ALIGNEDSEARCH        = 34;
const VAL_IGNORECASE           = 35;
const VAL_SEARCHMARGIN         = 36;
const VAL_KEEPSELSIZE          = 37;
const VAL_MMXDISPLAY           = 38;
const VAL_WINDOWFONT           = 39;
const VAL_TABSTOPS             = 40;
const VAL_MODULES              = 41;
const VAL_MEMORY               = 42;
const VAL_THREADS              = 43;
const VAL_BREAKPOINTS          = 44;
const VAL_REFERENCES           = 45;
const VAL_SOURCELIST           = 46;
const VAL_WATCHES              = 47;
const VAL_CPUFEATURES          = 50;
const VAL_TRACEFILE            = 51;
const VAL_ALIGNDIALOGS         = 52;
const VAL_CPUDASM              = 53;
const VAL_CPUDDUMP             = 54;
const VAL_CPUDSTACK            = 55;
const VAL_APIHELP              = 56;
const VAL_HARDBP               = 57;
const VAL_PATCHES              = 58;
const VAL_HINTS                = 59;
const PM_MAIN                  = 0;
const PM_DUMP                  = 10;
const PM_MODULES               = 11;
const PM_MEMORY                = 12;
const PM_THREADS               = 13;
const PM_BREAKPOINTS           = 14;
const PM_REFERENCES            = 15;
const PM_RTRACE                = 16;
const PM_WATCHES               = 17;
const PM_WINDOWS               = 18;
const PM_DISASM                = 31;
const PM_CPUDUMP               = 32;
const PM_CPUSTACK              = 33;
const PM_CPUREGS               = 34;
const PP_MAIN                  = 0x0003;
const   PP_EVENT               = 0x0000;
const   PP_PAUSE               = 0x0001;
const   PP_TERMINATED          = 0x0002;
const PP_BYPROGRAM             = 0x0004;
const PP_INT3BREAK             = 0x0010;
const PP_MEMBREAK              = 0x0020;
const PP_HWBREAK               = 0x0040;
const PP_SINGLESTEP            = 0x0080;
const PP_EXCEPTION             = 0x0100;
const PP_ACCESS                = 0x0200;
const PP_GUARDED               = 0x0400;
const MI_SIGNATURE             = 0x00646F4D;
const MI_VERSION               = 0x7265560A;
const MI_FILENAME              = 0x6C69460A;
const MI_FILESIZE              = 0x7A69530A;
const MI_TIMESTAMP             = 0x7473540A;
const MI_SFXENTRY              = 0x6566530A;
const MI_PATCH                 = 0x7461500A;
const MI_USER                  = 0x0073550A;
const MI_PROCDATA              = 0x6372500A;
const MI_SWDATA                = 0x6977530A;
const MI_CALLFINT              = 0x6966430A;
const MI_CALLFMOD              = 0x6D66430A;
const MI_CALLFABS              = 0x6166430A;
const MI_INT3BREAK             = 0x7470420A;
const MI_INT3BRKC              = 0x6370420A;
const MI_HDWRBREAK             = 0x7262480A;
const MI_JDDATA                = 0x74644A0A;
const MI_ANALYSIS              = 0x616E410A;
const MI_ANALPACK              = 0x636E410A;
const MI_AHINT                 = 0x7468410A;
const MI_TRACE                 = 0x6172540A;
const MI_TRACEPACK             = 0x6372540A;
const MI_CODECRC               = 0x7263430A;
const MI_SAVEAREA              = 0x6176530A;
const MI_END                   = 0x646E450A;
const MI_WINJUG                = 0x67754A0A;
const MI_WINJU1                = 0x31754A0A;
const MI_WINJU2                = 0x32754A0A;
const MI_WINJU3                = 0x33754A0A;
const MI_APPST                 = 0x73614F0A;

const DUTYPE_HEX_ASC_16        = 0x01101;
const DUTYPE_HEX_ASC_8         = 0x01081;
const DUTYPE_HEX_UC_16         = 0x0A101;
const DUTYPE_HEX_UC_8          = 0x0A081;
const DUTYPE_ASC_64            = 0x02401;
const DUTYPE_ASC_32            = 0x02201;
const DUTYPE_UC_64             = 0x03402;
const DUTYPE_UC_32             = 0x03202;
const DUTYPE_SIG_SHORT_DEC     = 0x04082;
const DUTYPE_UNSIG_SHORT_DEC   = 0x05082;
const DUTYPE_SHORT_HEX         = 0x06082;
const DUTYPE_SIG_LONG_DEC      = 0x04044;
const DUTYPE_UNSIG_LONG_DEC    = 0x05044;
const DUTYPE_LONG_HEX          = 0x06044;
const DUTYPE_ADDR              = 0x08014;
const DUTYPE_ADDR_WITH_ASC     = 0x0B041;
const DUTYPE_ADDR_WITH_UC      = 0x0C041;
const DUTYPE_32_BIT_FLOAT      = 0x07044;
const DUTYPE_64_BIT_DOUBLE     = 0x07028;
const DUTYPE_80_BIT_LONG_DOUBLE= 0x0701A;
const DUTYPE_DISASSEMBLE       = 0x09011;
const DUTYPE_PE_HEADER         = 0x0D001;

const MEMORYBASE               = 0;
const MEMORYSIZE               = 1;
const MEMORYOWNER              = 2;

const MODULEBASE               = 0; 
const MODULESIZE               = 1; 
const CODEBASE                 = 2; 
const CODESIZE                 = 3; 
const ENTRY                    = 4; 
const NSECT                    = 5; 
const DATABASE                 = 6; 
const EDATATABLE               = 7; 
const EDATASIZE                = 8; 
const IDATATABLE               = 9; 
const RESBASE                  = 10;
const RESSIZE                  = 11;
const RELOCTABLE               = 12;
const RELOCSIZE                = 13;

const IDNO                     = 0;
const IDYES                    = 1;
const IDCANCEL                 = 2;

const REG_EAX                  = 0;
const REG_ECX                  = 1;
const REG_EDX                  = 2;
const REG_EBX                  = 3;
const REG_ESP                  = 4;
const REG_EBP                  = 5;
const REG_ESI                  = 6;
const REG_EDI                  = 7;
const REG_EIP                  = 8;

const REG_AX                   = 10;
const REG_CX                   = 11;
const REG_DX                   = 12;
const REG_BX                   = 13;
const REG_SP                   = 14;
const REG_BP                   = 15;
const REG_SI                   = 16;
const REG_DI                   = 17;

const REG_AL                   = 20;
const REG_CL                   = 21;
const REG_DL                   = 22;
const REG_BL                   = 23;

const REG_AH                   = 30;
const REG_CH                   = 31;
const REG_DH                   = 32;
const REG_BH                   = 33;

const FLAG_CF                  = 40;
const FLAG_PF                  = 42;
const FLAG_AF                  = 44;
const FLAG_ZF                  = 46;
const FLAG_SF                  = 47;
const FLAG_TF                  = 48;
const FLAG_IF                  = 49;
const FLAG_DF                  = 50;
const FLAG_OF                  = 51;

const COMMAND                  = 0;
const CONDITION                = 1;
const DESTINATION              = 2;
const FINALDEST                = 3;
const SIZE                     = 4;
const TYPE                     = 5;

const IGNORE_NONE              = 0;
const IGNORE_ACCESS_KER32      = 0x1;
const IGNORE_INT3              = 0x2;
const IGNORE_TRAP              = 0x4;
const IGNORE_ACCESS            = 0x10;
const IGNORE_DIV_ZERO          = 0x20;
const IGNORE_ILLEGAL_INST      = 0x40;
const IGNORE_FPU_EXCEPT        = 0x100;
const IGNORE_CUSTOM_EXCEPT     = 0x200;
const IGNORE_MANUALLY          = 0xFFFFFFFF;
const IGNORE_ALL               = IGNORE_ACCESS_KER32|IGNORE_INT3|IGNORE_TRAP|IGNORE_ACCESS|IGNORE_DIV_ZERO|IGNORE_ILLEGAL_INST|IGNORE_FPU_EXCEPT|IGNORE_CUSTOM_EXCEPT;

const CPUDASM                  = 0;
const CPUDUMP                  = 1;
const CPUSTACK                 = 2;

// aliases for VAL_XXX
const HPROCESS                 = 20;
const PROCESSID                = 21;
const HMAINTHREAD              = 22;
const MAINTHREADID             = 23;
const MAINBASE                 = 24;
const PROCESSNAME              = 25;
const EXEFILENAME              = 26;
const CURRENTDIR               = 27;
const SYSTEMDIR                = 28;

function Register(index){this.index=index;}
Register.prototype={get v(){return Get(this.index);},set v(x){Set(x,this.index);},toString:function(){return Get(this.index).toString(16).toUpperCase();}};

var eax = EAX = new Register(REG_EAX);
var ecx = ECX = new Register(REG_ECX);
var edx = EDX = new Register(REG_EDX);
var ebx = EBX = new Register(REG_EBX);
var esp = ESP = new Register(REG_ESP);
var ebp = EBP = new Register(REG_EBP);
var esi = ESI = new Register(REG_ESI);
var edi = EDI = new Register(REG_EDI);
var eip = EIP = new Register(REG_EIP);

var ax  = AX  = new Register(REG_AX);
var cx  = CX  = new Register(REG_CX);
var dx  = DX  = new Register(REG_DX);
var bx  = BX  = new Register(REG_BX);
var sp  = SP  = new Register(REG_SP);
var bp16= BP16= new Register(REG_BP);
var si  = SI  = new Register(REG_SI);
var di  = DI  = new Register(REG_DI);
          
var al  = AL  = new Register(REG_AL);
var cl  = CL  = new Register(REG_CL);
var dl  = DL  = new Register(REG_DL);
var bl  = BL  = new Register(REG_BL);
          
var ah  = AH  = new Register(REG_AH);
var ch  = CH  = new Register(REG_CH);
var dh  = DH  = new Register(REG_DH);
var bh  = BH  = new Register(REG_BH);
          
var cf  = CF  = new Register(FLAG_CF);
var pf  = PF  = new Register(FLAG_PF);
var af  = AF  = new Register(FLAG_AF);
var zf  = ZF  = new Register(FLAG_ZF);
var sf  = SF  = new Register(FLAG_SF);
var tf  = TF  = new Register(FLAG_TF);
var df  = DF  = new Register(FLAG_DF);
var of  = OF  = new Register(FLAG_OF);