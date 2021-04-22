const torrentMovieNames = [
    'The.Zero.Theorem.2013.1080I.ReaD.NfO.BDRip.x264.DD5.1.HuN-BaKeR',
    'The.Zero.Theorem.2013.1080p.BluRay.ReMuX.AvC.DD5.1.HuN-BaKeR',
    'The.Zero.Theorem.2013.1080i.ReaD.NfO.BDRip.x264.DD5.1.HuN-BaKeR',
    'The.Zero.Theorem.2013.1080P.BluRay.ReMuX.AvC.DD5.1.HuN-BaKeR',
    'TLotR.The.Fellowship.of.the.Ring.2001.EE.UHD.BluRay.2160p.TrueHD.7.1.DoVi.x265.HuN-TRiNiTY',
    'Go.Trabi.Go.2.1992.DVDRip.x264.HUN-GEO',
    'Go.Trabi.Go.1991.DVDRip.x264.HUN-GEO',
    'Tales.Of.The.Riverbank.2008.1080p.WEB-DL.x264.HUN.ENG-VHS',
    'Xicos.Journey.2020.REPACK.WEB.H264-NTROPiC',
    'First.Monday.in.October.1981.DVDRip.x264.HUN-GEO',
    'A.Rozsaszin.Parduc.1963.BluRay.720p.x264.3xHun-Pirosasz',
    'Xicos.Journey.2020.1080p.WEB.H264-NTROPiC',
    'Xicos.Journey.2020.720p.WEB.H264-NTROPiC',
    'Les.Francis.2014.FRENCH.1080p.BluRay.DTS.x264.Hun-ARROW',
    'Rat.Race.2001.1080p.WEB-DL.x264.HUN.ENG-VHS',
    'Getting.Even.with.Dad.1994.1080p.BluRay.x264.Hun-TRT',
    'Roma.2018.Read.Nfo.Spanish.BDRip.x264.Hunsub-eStone',
    'Marc.Camoletti.Hatan.pizsamaban.2020.1080p.WEB-DL.AAC2.0.H.264.HUN-FLY',
    'The.Boy.Who.Could.Fly.1986.1080p.WEB-DL.x264.2xHUN.ENG-VHS',
    'Brahmotsavam.2016.720p.x264.E-AC3.HunSub-vTk',
    'Bigfoot.Family.2020.3D.MULTi.1080p.BluRay.x264-3DMax',
    'Lantana.2001.AMZN.WEBRiP.x264.HuN-TRiNiTY',
    'Kundun.1997.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY',
    'Krigen.2015.READ.NFO.1080p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Limitless.2011.720p.Hybrid.Open.Matte.BluRay.DTS.x264.Hun-L77',
    '211-es cella 1080p REMUX',
    'Cannibal.Holocaust.XT.1980.1080p.BluRay.AVC.ReMuX.DD2.0-HuN-Jak68',
    'The.Heartbreak.Kid.2007.READ.NFO.720p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'The.Heartbreak.Kid.2007.READ.NFO.1080p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Nadine.1987.WEBRIP.x264.HUN-Wolf',
    'Einstein és Hawking, az Univerzum mesterei 720p',
    'A dagály birodalma',
    'War.and.Peace.1956.1080p.BluRay.REMUX.AVC.TrueHD.2.0.HuN-TRiNiTY',
    'Breaking.News.in.Yuba.County.2021.2160p.WEB.H265-NAISU',
    'A.Fish.Called.Wanda.1988.READ.NFO.720p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Repul.a.haverom.1986.Custom.Ntsc.Hun.Dvd9-patuss',
    'The.Bridge.On.The.River.Kwai.1957.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY',
    'Judas.and.the.Black.Messiah.2021.2160p.HMAX.WEB-DL.DDP5.1.Atmos.HEVC-CMRG',
    'Heavy.2021.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO',
    'A dagály birodalma 1080i',
    'Pentek.Rezi.1941.WEBRIP.x264.HUN-Wolf',
    'Threesome.1994.WEBRIP.x264.HUN-Wolf',
    'Ismeros.Ismeretlenek.1958.BDRemux.1080p.AVC.Hun-Pirosasz',
    'The.Winslow.Boy.1999.1080p.BluRay.REMUX.AVC.PCM.2.0.HuN-TRiNiTY',
    'Breaking.News.in.Yuba.County.2021.720p.WEB.H264-NAISU',
    'A.masik.csaj.2013.WEBRip.x264.DD5.1.HUN-Menta',
    'Ötéves jegyesség',
    'The.Dickumentary.2014.1080p.WEB.h264-SECRETOS',
    'The.Dickumentary.2014.WEB.h264-SECRETOS',
    'The.Dickumentary.2014.720p.WEB.h264-SECRETOS',
    'Fukkatsu no hi 720p',
    'The.Secret.Garden.2020.BD50.AVC.DTSHD.HUN.2.0-TRiNiTY',
    'Shampoo.1975.DVDRip.x264.HUN-GEO',
    'Endings.Beginnings.2019.720p.BluRay.x264-RUSTED',
    'The.Infamous.Future.2021.720p.WEB.h264-OPUS',
    'The.Infamous.Future.2021.1080p.WEB.h264-OPUS',
    'I.Am.Duran.2019.1080p.Blu-ray.AVC.DTS-HD.MA.5.1-VEXHD',
    'To.All.the.Boys.Always.and.Forever.2021.720p.WEB-DL.DD+5.1.H264.HuN-No1',
    'Horror.Noire.A.History.of.Black.Horror.2019.1080p.AMZN.WEBRip.DDP2.0.x264-NTG',
    'Winnetou.es.Old.Shatterhand.a.Halal.Volgyeben.1968.BDRip.x264.Hun-eStone',
    'Crime.Story.1993.BDRip.x264.HUN-GEO',
    'Winnetou.es baratja.Old.Firehand.1966.BDRip.x264.Hun-eStone',
    'Winnetou.es.a.felver.Apanatschi.1966.Read.Nfo.BDRip.x264.Hun-eStone',
    '4x4.2019.SPANISH.ENSUBBED.1080p.WEBRip.DDP2.0.x264-BobDobbs',
    'Beauty.in.the.Broken.2015.720p.WEB.h264-iNTENSO',
    'Dark.Sense.2019.720p.WEB.h264-iNTENSO',
    'Winnetou.bosszuja.1965.Read.Nfo.BDRip.x264.Hun-eStone',
    'Az.olajherceg.1965.BDRip.x264.Hun-eStone',
    'Keselyuk.karmaiban.1964.Read.Nfo.BDRip.x264.Hun-eStone',
    'Dark.Sense.2019.WEB.h264-iNTENSO',
    'Winnetou.3.Winnetou.halala.1965.BDRip.x264.Hun-eStone',
    'Dark.Star.HR.Gigers.Welt.2014.GERMAN.1080p.AMZN.WEBRip.DDP2.0.x264-MRCS',
    'Scary.or.Die.2012.1080p.AMZN.WEBRip.DDP5.1.x264-PTP',
    'Xicos.Journey.2021.720p.WEB-DL.DD+5.1.H264.HuN-No1',
    'Winnetou.2.Az.utolso.renegatok.1964.BDRip.x264.Hun-eStone',
    'When.The.Bough.Breaks.1994.WEBRIP.x264.HUN-Wolf',
    'Winnetou.1963.Read.Nfo.BDRip.x264.Hun-eStone',
    'Violent.City.1970.BDRip.x264.HUN-GEO',
    'Americas.Hangar.2007.1080p.AMZN.WEBRip.DDP2.0.x264-BTN',
    'Utazas.a.multbol.1942.HUN.ENG.CUSTOM.1080p.BluRay.x264.PLAN9',
    'Barb.and.Star.Go.to.Vista.Del.Mar.2021.HDR.2160p.WEB.H265-NAISU',
    'Barb.and.Star.Go.to.Vista.Del.Mar.2021.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO',
    'The.Porter.The.Untold.Story.At.Everest.2020.1080p.WEB.h264-ASCENDANCE',
    'A jáde démon királysága',
    'Rambo 2 BD50',
    'The.Big.Wave.Project.2017.1080p.BluRay.x264.DD5.1-Candial',
    'Un.Divan.A.New.York.1996.WEBRIP.x264.HUN-Wolf',
    'Cyberjack.1995.WEBRIP.x264.HUN-Wolf',
    'Dont.Crack.Under.Pressure.2015.1080p.BluRay.x264.FLAC.2.0-HANDJOB',
    'A.kis.gurmek.2018.WEBRip.x264.DD2.0.HUN-Menta',
    'Xicos.Journey.2021.NF.WEBRip.x264.HUN-SFY',
    'The.Giant.Robber.Crab.2019.1080p.AMZN.WEBRip.DD2.0.x264-NOGRP',
    'Xicos.Journey.2021.REPACK.1080p.NF.WEB-DL.DDP5.1.H.264.HUN.SPA-PTHD',
    'Déli terminál',
    'Young.Hearts.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'To.All.The.Boys.Always.And.Forever.2021.NF.WEBRip.x264.HUN-SFY',
    'Bigfoot.Family.2020.1080p.BluRay.x264-WoAT',
    'The.Dissident.2020.1080p.WEB.h264-OPUS',
    'A professzor',
    'Assassins.2020.720p.WEB.h264-OPUS',
    'Muscle.2019.BDRip.x264-SCARE',
    'Breaking.News.in.Yuba.County.2021.1080p.WEB.H264-NAISU',
    'The.Cider.House.Rules.1999.Open.Matte.STARZ.WEBRip.x264.Hun-L77',
    "Willy's Wonderland",
    'Breaking News in Yuba County',
    'Judas.and.the.Black.Messiah.2021.720p.WEB.H264-NAISU',
    'Ill.Meet.You.There.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'To.All.the.Boys.Always.and.Forever.2021.720p.WEB.H264-NAISU',
    'The Map of Tiny Perfect Things',
    'Music.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'To.All.The.Boys.Always.And.Forever.2021.1080p.NF.WEB-DL.DDP5.1.Atmos.H.264.HUN.ENG-PTHD',
    'Legend.of.Deification.2020.BluRay.Remux.1080p.AVC.DTS-HD.MA5.1-GS88',
    'Willys.Wonderland.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Wrong.Turn.2021.1080p.Bluray.DTS-HD.MA.5.1.X264-EVO',
    'The.Map.of.Tiny.Perfect.Things.2021.1080p.AMZN.WEB-DL.DDP5.1.H.264-CMRG',
    'Silk.Road.2021.1080p.Bluray.DTS-HD.MA.5.1.X264-EVO',
    'Paradise.Cove.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'I.Blame.Society.2021.1080p.WEB-DL.DD5.1.H264-CMRG',
    'Cowboys.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Lapsis.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Barb.and.Star.Go.to.Vista.Del.Mar.2021.720p.WEB.H264-NAISU',
    'Blizzard.Of.Souls.2019.1080p.WEB-DL.LATVIA.DD5.1.HUN.x264.SirSzaal',
    'Blizzard.Of.Souls.2019.720p.WEB-DL.LATVIA.DD5.1.HUN.x264.SirSzaal',
    'Allamkozi.Szerelem.2014.WEB-DLRip.x264.HUN-EKG',
    'Amikor.Enekes.Voltam.2006.720p.WEB-DL.x264.HUN-EKG',
    'Masodik.Muszak.1984.AMZN.WEB-DL.1080p.x264.Hun-Pirosasz',
    'Old.Shatterhand.1964.1080p.Remux.AVC.DTS-HD.MA.2.0.HUN-CRW',
    'The.Map.of.Tiny.Perfect.Things.2021.HDR.2160p.WEB.H264-NAISU',
    'The.Map.of.Tiny.Perfect.Things.2021.1080p.WEB.H264-NAISU',
    'The.Map.of.Tiny.Perfect.Things.2021.720p.WEB.H264-NAISU',
    'The.Tank.2017.720p.WEB.h264-NOMA',
    'The.Tank.2017.1080p.WEB.h264-NOMA',
    'Getting.Even.with.Dad.1994.1080p.WEB.h264-NOMA',
    'Topical.Spanish.1970.SPANiSH.1080p.WEBRip.x264-SOMBRA',
    'Funhouse.2019.720p.WEB.H264-NTROPiC',
    'Funhouse.2019.WEB.H264-NTROPiC',
    'Tuskegee.Airmen.Legacy.of.Courage.2021.720p.WEB.h264-BAE',
    'Samsquanch.County.2020.1080p.WEB.h264-ASCENDANCE',
    'For.Whom.The.Alchemist.Exists.2019.1080p.WEB.H264-URANiME',
    'Save.Yourselves.2020.BDRip.x264-VETO',
    'Lionheart.1990.1080p.BluRay.AAC2.0.x264.HuN-Apex',
    'Serving.For.Justice.The.Story.Of.The.333Rd.Field.Artillery.Battalion.2020.1080p.WEB.h264-ASCENDANCE',
    'Snuff.1976.1080p.BluRay.x264-YAMG',
    'The.Mask.of.Zorro.1998.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY',
    'Snuff.1976.720p.BluRay.x264-YAMG',
    'King.A.Filmed.Record.Montgomery.To.Memphis.1970.Part.2.1080p.WEB.H264-CBFM',
    'Old.Shatterhand.1964.BDRip.x264.HUN-CRW',
    'Rohamsisakos madonna',
    'Regarding.Henry.1991.DVDRip.x264.HUN-GEO',
    'OnlyFans.Selling.Sexy.2021.1080p.WEB.h264-KOGi',
    'OnlyFans.Selling.Sexy.2021.720p.WEB.h264-KOGi',
    'Dirty.Work.1998.1080p.BluRay.X264-AMIABLE',
    'A.ferfi.aki.szerette.a.noket.1977.HUN.FRE.CUSTOM.1080p.BluRay.x264-PLAN9',
    'Wicker Park',
    'Save.Yourselves.2020.720p.BluRay.x264-VETO',
    'Kréta és Szantorini',
    'Growing.Up.Milwaukee.2020.1080p.WEB.h264-KOGi',
    'Growing.Up.Milwaukee.2020.720p.WEB.h264-KOGi',
    'Deep.Down.2021.720p.WEB.h264-KOGi',
    'Deep.Down.2021.1080p.WEB.h264-KOGi',
    'No.Chance.2020.1080p.WEB.h264-WATCHER',
    'Lost.Angelas.2019.1080p.WEB.h264-WATCHER',
    'Office.39.Kims.Cash.Machine.2020.1080p.WEB.h264-OPUS',
    'Saigon.Metalhood.2020.1080p.WEB.h264-OPUS',
    'Shadows.of.Sofia.2019.720p.WEB.h264-OPUS',
    'New.Police.Story.2004.BDRip.x264.DD.5.1.HUN-GEO',
    'Saigon.Metalhood.2020.720p.WEB.h264-OPUS',
    'Lost.For.Words.2013.720p.WEB.h264-WATCHER',
    'Vörös pont',
    'Lost.Angelas.2019.720p.WEB.h264-WATCHER',
    'Find.Your.Groove.2020.720p.WEB.h264-OPUS',
    'A majmok bolygója BD50',
    'Algorithm - Bliss',
    'Daddy.and.the.Warlord.2019.1080p.WEB.h264-OPUS',
    'Daddy.and.the.Warlord.2019.720p.WEB.h264-OPUS',
    'Brash.Boys.Club.2020.1080p.WEB.h264-SECRETOS',
    'Brash.Boys.Club.2020.720p.WEB.h264-SECRETOS',
    'Brash.Boys.Club.2020.WEB.h264-SECRETOS',
    'Sexmission.1984.720p.BluRay.HE-AAC.2.0.x264.HUN.POL',
    'The.Hidden.II.1993.WEB-DL.x264.Hun-MrDeta',
    'Given Movie 1080p',
    'Gran Canaria',
    'The.Hidden.II.1993.1080p.AMZN.WEB-DL.x264.DD+2.0.Hun-MrDeta',
    'I.Heart.Huckabees.2004.AMZN.WEBRip.DD2.x264.HuN-BaKeR',
    'Monte Walsh.1970.BDRip.x264.HUN-GEO',
    'The.Bonfire.Of.The.Vanities.1990.BDRip.DD2.0.x264.HuN-BaKeR',
    'A Karibu út',
    'Babycall.2011.BluRay.720p.x264.Hunsub-Pirosasz',
    'S.He.2018.WEB.H264-13',
    'S.He.2018.1080p.WEB.H264-13',
    'Happy.Death.Day.2017.720p.Open.Matte.AMZN.WEB-DL.TDS.x264.2xHun-L77',
    '16.Bars.2018.1080p.WEB.H264-13',
    '16.Bars.2018.WEB.H264-13',
    '16.Bars.2018.720p.WEB.H264-13',
    'Zsebpenz.1975.HUN.FRE.CUSTOM.1080p.BluRay.x264-PLAN9',
    'Squared.Love.2021.1080p.NF.WEB-DL.DDP5.1.H.264.HUNSUB-PTHD',
    'Red.Dot.2021.1080p.NF.WEB-DL.DDP5.1.H.264.HUNSUB-PTHD',
    'There.Is.No.I.in.Threesome.2021.1080p.WEB.H264-NAISU',
    'There.Is.No.I.in.Threesome.2021.720p.WEB.H264-NAISU',
    'No.Reasons.2021.1080p.AMZN.WEBRip.DD2.0.X.264-EVO',
    'Godsend.2021.1080p.AMZN.WEB-DL.DDP2.0.H264-CMRG',
    'The.Brink.2020.1080p.AMZN.WEBRip.DD5.1.x264-NTG',
    'O.az.igazi.2017.AMZN.WEBRip.x264.DD2.0.HUN-Menta',
    'Irok.a.pacban.2014.AMZN.WEBRip.x264.DD2.0.HUN-Menta',
    'Tisztitokura.2016.WEBRip.x264.DD2.0.HUN-Menta',
    'Pentek.Rezi.1941.HUN.ITA.CUSTOM.1080p.WEB-DL.x264-PLAN9',
    'Fear.of.Rain.2021.BDRip.x264.HunSub-Unknown',
    'The.Killing.Yard.2001.READ.NFO.Custom.Hun.PAL.DVDR-DOZSO',
    'We.Bare.Bears.The.Movie.2020.720p.WEB.h264-KOGi',
    'Buried.Alive.1990.1080p.BluRay.DTS.x264.HuN-BAYLEE',
    'A.tet.az.eleted.2004.TVRiP.HUN.x264-cabcab',
    'Repul.a.haverom.1986.DVDRiP.HUN.x264-cabcab',
    'Where.She.Lies.2020.720p.WEB.h264-OPUS',
    'Camp.14.Total.Control.Zone.2012.720p.WEB.h264-OPUS',
    'A.Thin.Line.Between.Love.and.Hate.1996.1080p.WEB.h264-NOMA',
    'Melodi.Grand.Prix.Delfinale.4.2021.NORWEGiAN.720p.WEB.h264-SKRiTT',
    'Occupy.The.Movie.2013.720p.WEB.h264-OPUS',
    'Only.You.1992.1080p.WEB-DL.x264.HUN.ENG-VHS',
    'J.E.S.U.S.A.2020.720p.WEB.h264-OPUS',
    'Risen.The.Story.of.Chron.Hell.Razah.Smith.2020.1080p.WEB.h264-OPUS',
    'J.E.S.U.S.A.2020.1080p.WEB.h264-OPUS',
    'Doomsday.2008.Unrated.720p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Camp.14.Total.Control.Zone.2012.1080p.WEB.h264-OPUS',
    'Magyar Retró',
    'Phoenix.Oregon.2019.BDRip.x264-BiPOLAR',
    'Michael.2011.BDRip.x264-BiPOLAR',
    'Lara.2019.BDRip.x264-BiPOLAR',
    'Jet.Generation.1968.THEATRiCAL.BDRip.x264-BiPOLAR',
    'Jet.Generation.1968.BDRip.x264-BiPOLAR',
    'Jet.Generation.1968.THEATRiCAL.1080p.BluRay.x264-BiPOLAR',
    'Jet.Generation.1968.1080p.BluRay.x264-BiPOLAR',
    'The.Dead.Lands.2014.HUN.BDRiP.DD2.0.x264-Gianni',
    'The.Dead.Lands.2014.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HUN-Gianni',
    'Three.Fugitives.1989.DVDRip.x264.HUN-GEO',
    "Bram.Stoker's.Dracula.1992.1080p.GBR.BluRay.AVC.DTS-HD.MA.5.1-GSeye",
    'Phoenix.Oregon.2019.720p.BluRay.x264-BiPOLAR',
    'Super Cities - Róma',
    'Jet.Generation.1968.THEATRiCAL.720p.BluRay.x264-BiPOLAR',
    'Days.of.the.Bagnold.Summer.2019.720p.BluRay.DD5.1.x264.HuN-No1',
    'Jet.Generation.1968.720p.BluRay.x264-BiPOLAR',
    'Days.of.the.Bagnold.Summer.2019.1080p.BluRay.DD5.1.x264.HuN-No1',
    'Deadpool.2016.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY',
    'A.hatalom.ara.1969.Read.Nfo.BDRip.x264.Hun-eStone',
    'A.Distant.Neighbourhood.2010.REPACK.1080p.BluRay.x264-USURY',
    'Light.Sleeper.1992.BDRip.x264.HUN-CRW',
    'JL.Ranch.2016.1080p.AMZN.WEB-DL.DDP5.1.H.264.HUN.ENG-SFY',
    'JL.Ranch.2016.720p.AMZN.WEB-DL.DDP5.1.H.264.HUN.ENG-SFY',
    'JL.Ranch.2016.AMZN.WEBRip.x264.HUN-SFY',
    'A.Distant.Neighbourhood.2010.REPACK.720p.BluRay.x264-USURY',
    'Trigger.2016.WEB-DL.H264.HuN-No1',
    'The.Mirror.Crackd.1980.BDRip.x264.HUN-GEO',
    'Wonder.Boys.2000.720p.BluRay.DD5.0.x264.Hun-boOk',
    'Super Cities - Rio De Janeiro',
    'Super Cities - New York',
    'Light.Sleeper.1992.1080p.Remux.AVC.DTS-HD.MA.2.0.HUN-CRW',
    'Violet.Evergarden.Eternity.and.the.Auto.Memories.Doll.2019.BDRip.x264-HAiKU',
    'Violet.Evergarden.Eternity.and.the.Auto.Memories.Doll.2019.720p.BluRay.x264-HAiKU',
    'A.Whale.of.a.Tale.1976.1080p.WEBRip.x264.Hun-DOZSO',
    'Burglar.1987.DVDRip.x264.HUN-GEO',
    'Hoshi.wo.Ou.Kodomo.2011.1080p.BluRay.DTS-THORA',
    'Super Cities - London',
    'Jegkalozok.1984.BluRay.1080p.x264.Hun-Pirosasz',
    'You.Get.Me.2017.720p.WEBRip.x264-STRiFE',
    'Oroszlánok árnyékában',
    'Greenland.2020.READ.NFO.2160p.UHD.BluRay.REMUX.TrueHD.Atmos.7.1.HDR.HEVC.HuN-TRiNiTY',
    'Cant.Forget.New.Jersey.2019.WEB.H264-13',
    'Greenland.2020.READ.NFO.BDRip.x264.HuN-TRiNiTY',
    'Greenland.2020.READ.NFO.720p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Greenland.2020.READ.NFO.1080p.BluRay.DD+7.1.x264.HuN-TRiNiTY',
    'Greenland.2020.READ.NFO.1080p.BluRay.REMUX.TrueHD.Atmos.7.1.AVC.HuN-TRiNiTY',
    'Greenland.2020.READ.NFO.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY',
    ' Csúnyán szép az élet',
    'Fast.and.Furious.Presents.Hobbs.and.Shaw.2019.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY',
    'The.Fate.of.the.Furious.2017.1080p.UHD.BluRay.DD+7.1.HuN-TRiNiTY',
    'Fast.and.Furious.7.2015.Extended.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY',
    'Fast.and.Furious.6.2013.Extended.1080p.UHD.BluRay.DD+5.1.x264.HuN-TRiNiTY',
    'Fast.and.Furious.2009.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY',
    'The.Fast.and.the.Furious.Tokyo.Drift.2006.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY',
    '2.Fast.2.Furious.2003.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY',
    'The.Fast.and.the.Furious.2001.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY',
    'Oroszlánok árnyékában 720p',
    'Veszedelmes Afrika - Mindent az utódokért',
    'Action.Jackson.1988.ReaD.NfO.720p.BluRay.x264.DD2.0.2XHuN-BaKeR',
    'Action.Jackson.1988.ReaD.NfO.1080p.BluRay.x264.DD2.0.2XHuN-BaKeR',
    'Action.Jackson.1988.ReaD.NfO.1080p.BluRay.ReMuX.AvC.DD2.0.2XHuN-BaKeR',
    'Action.Jackson.1988.ReaD.NfO.BDRip.DD2.0.x264.HuN-BaKeR',
    'News.of.the.World.2020.2160p.AMZN.WEB-DL.DDP5.1.HDR.HEVC.HUN.ENG-SFY',
    'The.Misadventures.of.Hedi.and.Cokeman.2021.720p.NF.WEB-DL.DDP5.1.x264-iKA',
    'The.Misadventures.of.Hedi.and.Cokeman.2021.1080p.NF.WEB-DL.DDP5.1.x264-iKA',
    'News.of.the.World.2020.1080p.AMZN.WEB-DL.DDP5.1.H.264.HUN.ENG-PTHD',
    'News.of.the.World.2020.720p.AMZN.WEB-DL.DDP5.1.H.264.HUN.ENG-PTHD',
    'News.of.the.World.2020.AMZN.WEBRip.x264.HUN-SFY',
    'Az.ember.aki.nem.tud.meghalni.1994.VHSRiP.HUN.x264-cabcab',
    'A.cingar.ferfi.nyomaban.1936.HUN.ENG.CUSTOM.1080p.BluRay.x264-PLAN9',
    'Veszedelmes Afrika - Mindent az utódokért 720p',
    'Howl.2015.1080p.BluRay.x264-RRH',
    'Black.Art.In.the.Absence.of.Light.2021.720p.WEB.h264-KOGi',
    'The.Croods.A.New.Age.2020.1080p.Bluray.X264.DTS-EVO',
    'Sator.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'The.Great.Silence.2020.1080p.BluRay.x264-GETiT',
    'What.Killed.Maradona.2021.720p.WEB.H264-CBFM',
    'Eroszakos.Mult.2005.BluRay.1080p.x264.Hun-Pirosasz',
    'Paydirt.2020.DVDRip.x264-ESX',
    'Elizabeth.Is.Missing.2019.DVDRip.x264-ESX',
    'Edge.of.Extinction.2020.DVDRip.x264-ESX',
    'Seven.Sinners.1940.RESTORED.BDRip.x264-ORBS',
    'Pittsburgh.1942.RESTORED.BDRip.x264-ORBS',
    'Pittsburgh.1942.720p.BluRay.x264-ORBS',
    'Pittsburgh.1942.1080p.BluRay.x264-ORBS',
    'Tul.szep.a.menyasszony.1956.HUN.FRE.CUSTOM.1080p.BluRay.x264-PLAN9',
    'My.Fellow.Americans.1996.1080p.WEB-DL.x264.HUN.ENG-VHS',
    'Two.of.Us.2020.PROPER.BDRiP.x264-GUACAMOLE',
    'Two.of.Us.2020.PROPER.1080p.BluRay.x264-GUACAMOLE',
    'The.Operative.2019.720p.BluRay.DD5.1.x264.Hun-boOk',
    'Two.of.Us.2020.PROPER.720p.BluRay.x264-GUACAMOLE',
    'The.Operative.2019.1080p.BluRay.DDP5.1.x264.Hun-boOk',
    'Nulladik óra BD50',
    'Mamma.Mia.Here.We.Go.Again.2018.2160p.UHD.BluRay.TrueHD.7.1.DoVi.x265.HuN-TRiNiTY',
    'Mamma.Mia.2008.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY',
    'Lord.of.the.Flies.1963.1080p.BluRay.FLAC.x264.HuN-TRiNiTY',
    'Nadine.1987.1080p.WEB-DL.x264.HUN.ENG-VHS',
    'The.Great.Silence.2020.German.DL.1080p.BluRay.AVC-HOVAC',
    'Aquaslash.Vom.Spassbad.zum.Blutbad.2019.German.DL.1080p.BluRay.AVC-SAViOURHD',
    'Breeder.Die.Zucht.2020.GERMAN.720p.BluRay.x264-UNiVERSUM',
    'Before.The.Fire.2020.GERMAN.720p.BluRay.x264-UNiVERSUM',
    'Horizon.Line.2020.WEBRip.x264.HunSub-Unknown',
    'Faceless.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'The.Great.Silence.2020.BDRip.x264-GETiT',
    'Friday.the.13th.Part.3.1982.1080p.2D.BluRay.AVC.ReMuX.DD2.0-HuN-Jak68',
    'A.nagy.gyemantrablas.1992.VHSRiP.HUN.x264-cabcab',
    'Booty.Call.1997.DVDRip.x264.HUN-GEO',
    'Hongkong.bugyrai.1988.VHSRiP.HUN.x264-cabcab',
    'Total.Recall.1990.1080p.UHD.BluRay.DD+7.1.HDR.x265.HuN-TRiNiTY',
    'When.the.Bell.Rings.2014.DOCU.720p.WEB-DL.x264.AAC.ReLeNTLesS',
    'I.am.Duran.2019.720p.BluRay.x264-HANDJOB',
    'Escape.From.The.Planet.Of.The.Apes.1971.1080p.BluRay.x264.Hun-Made',
    'A vérszomjas dada 1080p REMUX',
    'Healing.Scars.2018.720p.AMZN.WEB-DL.DDP2.0.H.264-TEPES',
    'Meteor.1979.BDRip.x264.HUN-GEO',
    'Mama.Is.Boos.1986.DUTCH.1080p.WEB.h264-TRIPEL',
    'Schatjes.1984.DUTCH.1080p.WEB.h264-TRIPEL',
    'Like.Father.Like.Son.2013.BDRip.DD2.0.x264.HuN-BaKeR',
    'Like.Father.Like.Son.2013.ReaD.NfO.720p.BluRay.DD2.0.x264.HuN-BaKeR',
    'Dareka no Manazashi 1080p',
    'Like.Father.Like.Son.2013.1080p.BluRay.DD2.0.x264.HuN-BaKeR',
    'Like.Father.Like.Son.2013.1080p.BluRay.ReMuX.AvC.DD2.0.HuN-BaKeR',
    'Viszontlatasra.a.pokolban.1970.BDRip.x264.Hun-eStone',
    'Dennis.Rodman.a.Fereg.1998.WEBRIP.x264.HUN-Wolf',
    'Veszedelmes Afrika - Mindent az utódokért 1080i',
    'The.Parallax.View.1974.BDRip.x264.HUN-CRW',
    'Horror.Noire.A.History.of.Black.Horror.2019.1080p.AMZN.WEB-DL.DDP2.0.H.264-NTG',
    'The.Flu.That.Killed.50.Million.2018.TVRIP.x264.HUN-Wolf',
    'A.Markak.Haboruja.2012.1080p.BluRay.x264.Hun-Pirosasz',
    'Headwinds.2011.1080p.BluRay.x264.DD2.0.HuN-BaKeR',
    'Headwinds.2011.720p.BluRay.x264.DD2.0.HuN-BaKeR',
    'John.Carpenter.Vampirok.1998.BDRip.x264.Hun-eStone',
    'Headwinds.2011.DVDRip.x264.HuN-BaKeR',
    'Szerelmem.Szelleme.2000.WEBRIP.x264.HUN-Wolf',
    'Patkanyfogo.1956.BDRip.x264.Hun-eStone',
    'The.Parallax.View.1974.1080p.Remux.AVC.LPCM.1.0.HUN-CRW',
    'Madarak 2160p UHD BluRay HDR',
    'The.Grudge.2004.THEATRICAL.1080p.WEB.H264-FLAME',
    'The.Grudge.2004.THEATRICAL.720p.WEB.H264-FLAME',
    'The.Reef.2010.1080p.BluRay.x264.DTS.Hun-MrDeta',
    'Zsaruk',
    'Tévedések',
    'Vatikán - a pápák időtlen városa',
    'Dr.Goldfoot.es.a.lanybombak.1966.HUN.BDRip.x264-PTR',
    'Dr.Goldfoot.es.a.lanybombak.1966.HUN.720p.BluRay.x264-PTR',
    'Dr.Goldfoot.es.a.Bikini-gep.1965.HUN.BDRip.x264-PTR',
    'Dr.Goldfoot.es.a.Bikini-gep.1965.HUN.720p.BluRay.x264-PTR',
    'Dark.City.1998.1080p.Open.Matte.Directors.Cut.WEB-DL.DD5.1.x264.Hun-L77',
    'Courting.Mom.and.Dad.2021.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO',
    'The.Swordsman.2020.BluRay.1080p.DTS-HD.MA.5.1.x264-MTeam',
    'Falka születik 720p',
    'The.Legend.of.Fall.Creek.2021.1080p.WEB-DL.DD2.0.H.264-EVO',
    'Sacrifice.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'PVT.CHAT.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Expiry.2021.1080p.WEB-DL.DD2.0.H.264-EVO',
    'Before.During.After.2020.1080p.WEB-DL.DD2.0.H.264-EVO',
    '15.Killings.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'After.My.Death.2017.1080p.BluRay.x264-GiMCHi',
    'Perfume.The.Story.Of.A.Murderer.2006.2160p.UHD.BluRay.DTS-HD.HR.5.1.HDR.x265.HuN-TRiNiTY',
    'Special.Correspondents.2009.WEB-DLRip.x264.HUN-EKG',
    'Heal 720p',
    'Hatchet.2006.UnRaTeD.1080p.BluRay.x264.HuN-BaKeR',
    'Hatchet.2006.UnRaTeD.BDRip.x264.HuN-BaKeR',
    'Do.the.Right.Thing.1989.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY',
    'A.Vigilante.2018.SPANiSH.1080p.WEB.h264-ENDURANCE',
    'The.Killer.Elite.1975.1080p.BluRay.x264.Hun-TRT',
    'The.Name.of.the.Game.2018.1080p.WEB.h264-OPUS',
    'The.Good.Change.2018.720p.WEB.H264-FLAME',
    'The.Good.Change.2018.WEB.H264-FLAME',
    'Dobra.Zmiana.2018.POLISH.1080p.WEB.H264-FLAME',
    'Szerelmem.Szelleme.2000.WEB-DL.1080p.H264.Hun-Pirosasz',
    'The.Dead.Lands.2014.1080p.BluRay.DTS.x264.HuN-No1',
    'Yakari.a.Spectacular.Journey.2020.720p.WEB-DL.DD2.0.x264.HuN-BaKeR',
    'Kazaam.a.szellem.1996.HUN.BDRip.x264-PTR',
    'Kazaam.a.szellem.1996.HUN.720p.BluRay.x264-PTR',
    'Stephen.Kings.ES.1990.German.BluRay.1080p.DD2.0.x264.3xHUN-GuRF',
    'The.Magic.Roundabout.2005.DVDRip.x264.DD.5.1.HUN-GEO',
    'Udvari bolond BD50',
    'Deliver.Us.From.Evil.2020.1080p.BluRay.x264.DD5.1-SbR',
    'Tuzvonalban.1983.BluRay.1080p.x264.Hun-Pirosasz',
    'Gyilkos hasonmás',
    'Yakari.a.Spectacular.Journey.2020.WEBRip.DD2.0.x264.HuN-BaKeR',
    'Hajsza.a.gyemantokert.1965.BDRip.x264.Hun-eStone',
    'Un.divan.a.New.York.1996.1080p.AMZN.WEBRip.DD+2.0.x264.HuN-BAYLEE',
    'Honest.Thief.2020.1080p.BluRay.REMUX.AVC.DTS-HD.MA.7.1.HUN.ENG-SFY',
    'Honest.Thief.2020.1080p.BluRay.DDP7.1.x264.HUN-PTHD',
    'Honest.Thief.2020.720p.BluRay.DD5.1.x264.HUN-PTHD',
    'Honest.Thief.2020.BDRip.x264.HUN-SFY',
    'India vad Karnatakája',
    'Devyataya.2019.1080p.BDREMUX.RUS.DTS.HUN.H264.SirSzaal',
    'A Bagnold család nyara',
    'Enemies.Closer.2013.READ.NFO.HUN.PAL.DVDR-WB',
    'Desperate.Hours.1990.RETAiL.HUN.PAL.DVDR-WB',
    'American.Skin.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Bunben.egve.1993.WEBRip.x264.Hun-eStone',
    'Two.by.Two.Overboard.2021.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO',
    'Running.Naked.2021.1080p.WEB-DL.DD2.0.H.264-EVO',
    'About.Hope.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Do.The.Right.Thing.1989.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY',
    'Life.In.A.Day.2020.2021.1080p.WEB.h264-TRIPEL',
    'Life.In.A.Day.2020.2021.720p.WEB.h264-TRIPEL',
    'Falling.for.Vermont.2007.720p.WEB-DL.x264.HUN-EKG',
    'Rosamunde.Pilcher.Kuste.der.Traume.2001.720p.WEB-DL.x264.HUN-EKG',
    'Rosamunde.Pilcher.Vermachtnis.der.Liebe.2005.720p.WEB-DL.x264.HUN-EKG',
    'A.Killer.Rising.2020.1080p.WEB.H264-NAISU',
    'A.Killer.Rising.2020.720p.WEB.H264-NAISU',
    'Paperback.Hero.1999.BDRip.x264.HUN-CRW',
    'Piloci.2019.1080p.BluRay.x264-FLAME',
    'The Night Is Short, Walk on Girl 1080p',
    'Paperback.Hero.1999.1080p.Remux.AVC.FLAC.2.0.HUN-CRW',
    'Piloci.2019.720p.BluRay.x264-FLAME',
    'Piloci.2019.BDRip.x264-FLAME',
    'Independence.Day.Resurgence.2016.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY',
    'Meghasadva',
    'A Pixar Story 1080p',
    'Highway 720p',
    'Blood.Sweat.and.Lies.2018.HUN.WEBRip.X264-HunTorrent',
    'Room.at.the.Top.1959.DVDRip.x264.Hun-MrDeta',
    'The.Forecaster.2014.1080p.WEB.h264-OPUS',
    'Independence.Day.1996.EXTENDED.READ.NFO.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY',
    'Bend.It.Like.Beckham.2002.BDRip.DD2.0.x264.HuN-BaKeR',
    'Futás az életért',
    'Felkavar.a.szel.2006.AMZN.WEBRip.x264.DD2.0.HUN-Menta',
    'Legy.a.pasim.2017.AMZN.WEBRip.x264.DD2.0.HUN-Menta',
    'Egyszer.Len.2015.AMZN.WEBRip.x264.DD2.0.HUN-Menta',
    'Vörös cirokmező',
    'Plein.soleil.1960.1080p.BluRay.FLAC1.0.x264.HuN-Apex',
    'The.Arrested.Development.Documentary.Project.2013.1080p.WEB.h264-OPUS',
    'The.Dead.Lands.2014.720p.BluRay.DD5.1.x264.HuN-No1',
    'Halalcsok.1991.WEB-DL.1080p.x264.Hun-Pirosasz',
    'Getting.Even.1986.HUN.NARRATOR.VHSRIP.READNFO.x264-X911',
    'Still.A.Revolutionary.Albert.Einstein.2020.PROPER.1080p.WEBRip.x264-CBFM',
    'The.Curse.of.Audrey.Earnshaw.2020.READ.NFO.1080p.BluRay.DDP5.1.x264.HUN-FULCRUM',
    'The.Curse.of.Audrey.Earnshaw.2020.READ.NFO.720p.BluRay.DDP5.1.x264.HUN-FULCRUM',
    'The.Curse.of.Audrey.Earnshaw.2020.READ.NFO.BDRip.x264.HUN-FULCRUM',
    'Still.A.Revolutionary.Albert.Einstein.2020.PROPER.720p.WEBRip.x264-CBFM',
    'Egy kis romantika',
    'Crusoe.1988.WEBRip.x264.Hun-DOZSO',
    'The.Hills.Have.Eyes.Part II.1984.HUNSUB.720p.BluRay.x264-TOXI',
    'The.Hills.Have.Eyes.1977.HUN.NARRATOR.720p.BluRay.x264-TOXI',
    'Noverek.2006.HUN.720p.WEB-DL.H.264-TOXI',
    'Noverek.1972.2xHUN.720p.BluRay.x264-TOXI',
    'Sínek a semmibe',
    'Cooking.with.Love.2018.720p.WEB-DL.DD+5.1.H264.HuN-No1',
    'Cooking.with.Love.2018.1080p.WEB-DL.DD+5.1.H264.HuN-No1',
    'Crusoe.1988.1080p.AMZN.WEB-DL.H.264.HUN-DOZSO',
    'ParaNorman',
    'The.Ninth.2019.BDRip.x264.HuN-No1',
    'The.Ninth.2019.720p.BluRay.DD5.1.x264.HuN-No1',
    'The.Ninth.2019.1080p.BluRay.DD5.1.x264.HuN-No1',
    'Shakuntala Devi 1080p',
    'Bogan.Hunters.Bathurst.Conspiracy.2015.1080p.WEB.H264-CBFM',
    'Bogan.Hunters.Bathurst.Conspiracy.2015.720p.WEB.H264-CBFM',
    'Picture.Perfect.Royal.Christmas.2020.1080p.WEB.h264-WATCHER',
    'Friday.the.13th.Part.3.1982.1080p.2D.BD25.AVC.DD2.0-HuN-Jak68',
    'Love.and.Hip.Hop.Its.A.Love.Thing.2021.1080p.WEB.h264-BAE',
    'Mediastan.2013.SUBBED.1080p.WEB.h264-OPUS',
    'Sínek a semmibe 720p',
    'Rém rom',
    'Szörnyek az űrlények ellen',
    'Remalmok.haza.1988.HUN.BDRip.x264-PTR',
    'Blue.Mountain.State.The.Rise.of.Thadland.2016.GERMAN.DL.1080P.WEB.H264-WAYNE',
    'Az ifjú Werther szenvedései',
    'Fedőneve - Pipő',
    'Detective.Story.1951.COMPLETE.RETAiL.HUNSUB.PAL.DVD5-ISO',
    'Planet.Of.The.Humans.2019.1080p.WEB.h264-ASCENDANCE',
    'Planet.Of.The.Humans.2019.720p.WEB.h264-ASCENDANCE',
    'Flying.Objects.A.State.Secret.2020.1080p.WEB.h264-ASCENDANCE',
    'Halj meg velem!',
    'Out.Cold.2001.1080p.WEB-DL.x264.DD+5.1.Hun-MrDeta',
    'Vad India - A dzsungel királyai 720p',
    'Slaughter.2009.720p.BluRay.DD5.1.x264.HuN-No1',
    'Az.Usher-haz.bukasa.1989.HUN.CUSTOM.BDRip.x264-PTR',
    'Az.Usher-haz.bukasa.1989.HUN.CUSTOM.720p.BluRay.x264-PTR',
    'Idétlen időkig 1080p REMUX',
    'A.vilag.leggazdagabb.macskaja.1986.HUN.DVDRip.x264-TOXI',
    'A.stopposok.reme.1989.HUN.DVDRip.x264-TOXI',
    'Phoenix.Oregon.2020.1080p.WEB-DL.H264.AC3-EVO',
    'Vad India - A dzsungel királyai 1080i',
    'Cigányok ideje 1080p',
    'Az utolsó Pápa',
    'Cigányok ideje 720p',
    'The.Good.Guy.2009.BDRip.x264.DD2.0.HuN-BaKeR',
    'The.Good.Guy.2009.720p.BluRay.x264.DD2.0.HuN-BaKeR',
    'The.Good.Guy.2009.1080p.BluRay.x264.DD2.0.HuN-BaKeR',
    'Az utolsó Pápa 720p',
    'Looker.1981.720p.BluRay.AAC2.0.x264.Hun-boOk',
    'The.Bride.with.White.Hair.2.1993.iNTERNAL.BDRip.x264-MANiC',
    'Punishment.Park.1971.iNTERNAL.BDRip.x264-MANiC',
    'New.Fist.of.Fury.1976.iNTERNAL.BDRip.x264-MANiC',
    'New.Fist.of.Fury.1976.iNTERNAL.1980.RE-EDIT.BDRip.x264-MANiC',
    'Mr.Vampire.1985.iNTERNAL.BDRip.x264-MANiC',
    'La.Marseillaise.1938.iNTERNAL.BDRip.x264-MANiC',
    'His.Girl.Friday.1940.iNTERNAL.BDRip.x264-MANiC',
    'Hard.Eight.1996.iNTERNAL.BDRip.x264-MANiC',
    'Graduate.First.1978.iNTERNAL.BDRip.x264-MANiC',
    'Bronson.2008.iNTERNAL.BDRip.x264-MANiC',
    'The Wolf of Snow Hollow',
    'Huliganok.2005.HUN.Open.Matte.1080p.BluRay.x264-PTR',
    'Cam.Girls.2021.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Kinky.Boots.2005.BDRip.x264.HUN-CRW',
    'Szenvedely.1969.WEB-DL.iTunes.1080p.H264.Hun-Pirosasz',
    'Kinky.Boots.2005.1080p.Remux.AVC.DTS-HD.MA.5.1.HUN-CRW',
    'aTypical.Wednesday.2020.720p.WEB.H264-NAISU',
    'The.Monopoly.On.Violence.2020.720p.WEB.h264-ASCENDANCE',
    'The.Monopoly.On.Violence.2020.1080p.WEB.h264-ASCENDANCE',
    'Dont.Call.Me.Bigfoot.2020.1080p.WEB.h264-ASCENDANCE',
    'Redeeming.Uncle.Tom.2019.720p.WEB.h264-ASCENDANCE',
    'Alien.Contactee.2020.1080p.WEB.h264-ASCENDANCE',
    'Rosamunde.Pilcher.Melodie.der.Herzen.1998.720p.WEB-DL.x264.HUN-EKG',
    'Rosamunde.Pilcher.Flamme.der.Liebe.2003.720p.WEB-DL.x264.HUN-EKG',
    'Summer.Villa.2016.720p.WEB-DL.x264.HUN-EKG',
    'Rosamunde.Pilcher.Paradies.der.Traume.2003.720p.WEB-DL.x264.HUN-EKG',
    'Rosamunde.Pilcher.Federn.im.Wind.2004.720p.WEB-DL.x264.HUN-EKG',
    'Katie.Fforde.Das.Schweigen.der.Manner.2016.720p.WEB-DL.x264.HUN-EKG',
    'The.Opening.Act.2020.BDRip.x264-iMPRiNT',
    'The.Opening.Act.2020.1080p.BluRay.x264-MiMiC',
    'The.Opening.Act.2020.720p.BluRay.x264-MiMiC',
    'Sea.Gypsies.The.Far.Side.of.the.World.2017.1080p.WEB.h264-iNTENSO',
    'Suzi.Q.2019.1080p.WEB.h264-iNTENSO',
    'Ten.Little.Indians.1989.WEB.h264-iNTENSO',
    'Petla.2020.1080p.BluRay.x264-FLAME',
    'The.Edge.of.Love.2008.Limited.1080p.Bluray.X264-DIMENSION',
    'Verratene.Freunde.2013.German.720p.HDTV.x264-muhHD',
    'The.Scorpion.King.2002.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY',
    'Petla.2020.720p.BluRay.x264-FLAME',
    'Finding.Rin.Tin.Tin.2007.DVDRip.x264.HUN-GEO',
    'Petla.2020.BDRip.x264-FLAME',
    'The.Mummy.Returns.2001.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY',
    'Nocturna.2007.BDRip.x264.DD.5.1.HUN-GEO',
    'A névtelen harcos',
    'Wendy.Williams.What.a.Mess.2021.720p.WEB.h264-BAE',
    'Witching.and.Bitching.2013.RETAiL.HUN.PAL.DVDR-WB',
    'Mulan.2020.CUSTOM.HUN.PAL.DVD9-WB',
    'Mulan.2020.CUSTOM.HUN.PAL.DVDR-WB',
    'Amateur.Night.2016.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY',
    'Amateur.Night.2016.1080p.BluRay.DD.5.1.x264.HuN-TRiNiTY',
    'Amateur.Night.2016.720p.BluRay.DD.5.1.x264.HuN-TRiNiTY',
    'Amateur.Night.2016.BDRip.x264.HuN-TRiNiTY',
    'Alien.predator.1986.HUN.720p.BluRay.x264-TOXI',
    'Scary.Movie.2000.Open.Matte.AMZN.WEBRiP.x264.HuN-TRiNiTY',
    'Future.Zone.1990.HUN.720p.BluRay.x264-TOXI',
    'Future.Force.1989.HUN.720p.BluRay.x264-TOXI',
    'Cyberjack.1995.HUN.1080p.WEB-DL.H.264-TOXI',
    'Do.the.Right.Thing.1989.2160p.UHD.BluRay.REMUX.DTS-HD.MA.7.1.HDR.HEVC.HuN-TRiNiTY',
    'Bulado.2020.1080p.BluRay.x264-HDEX',
    'Bulado.2020.720p.BluRay.x264-HDEX',
    'The.Dead.Pool.1988.PROPER.1080p.BluRay.x264-CULTHD',
    'Run Hide Fight',
    'Chino.1973.720p.BluRay.x264-GAZER',
    'Richard.Jewell.2019.CUSTOM.HUN.PAL.DVD9-WB',
    'Cocoon.2020.720p.BluRay.x264-ORBS',
    'Cocoon.2020.1080p.BluRay.x264-ORBS',
    'Richard.Jewell.2019.CUSTOM.HUN.PAL.DVDR-WB',
    'Sleeping.Beauty.1959.BD50.AVC.DTSHD.7.1.HUN-TRiNiTY',
    'Good bye, Lenin! 1080p REMUX',
    'Palmer.2021.WEBRip.x264.HunSub-Romeoo',
    'The.Gangster.the.Cop.the.Devil.2019.BDRip.x264-BiPOLAR',
    'Rey.2017.BDRip.x264-BiPOLAR',
    'My.Missing.Valentine.2020.BDRip.x264-BiPOLAR',
    'Light.from.Light.2019.BDRip.x264-BiPOLAR',
    'Bull.2019.DVDRip.x264-BiPOLAR',
    'A.Distant.Neighbourhood.2010.BDRip.x264-BiPOLAR',
    'Soft.Top.Hard.Shoulder.1992.1080p.BluRay.x264-BiPOLAR',
    'Rey.2017.1080p.BluRay.x264-BiPOLAR',
    'My.Missing.Valentine.2020.1080p.BluRay.x264-BiPOLAR',
    'Exotic.2016.WEB.H264-13',
    'Felemelkedés 720p',
    'Joel.McHale.Live.from.Pyongyang.2019.1080p.WEB.h264-OPUS',
    'General.Commander.2019.720p.BluRay.x264.DD2.0.HuN-BaKeR',
    'General.Commander.2019.1080p.BluRay.x264.DD2.0.HuN-BaKeR',
    'John Carpenter - Vámpírok BD50',
    'General.Commander.2019.BDRip.x264.DD2.0.HuN-BaKeR',
    'The.War.with.Grandpa.2020.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HUN-SFY',
    'Crossroads.1986.1080p.Remux.AVC.DTS-HD.MA.2.0.HUN-CRW',
    'The.War.with.Grandpa.2020.BDRip.x264.HUN-SFY',
    'The.War.with.Grandpa.2020.1080p.BluRay.DDP5.1.x264.HUN-PTHD',
    'The.War.with.Grandpa.2020.720p.BluRay.DD5.1.x264.HUN-PTHD',
    'Cagefighter.2020.720p.BluRay.x264-UNVEiL',
    'Cagefighter.2020.BDRip.x264-UNVEiL',
    'Motherless.Brooklyn.2019.1080p.BluRay.REMUX.DTS-HD.MA.5.1.AVC.HUN-FULCRUM',
    'Motherless.Brooklyn.2019.1080p.BluRay.DDP5.1.x264.HUN-FULCRUM',
    'Motherless.Brooklyn.2019.720p.BluRay.DD5.1.x264.HUN-FULCRUM',
    'Motherless.Brooklyn.2019.BDRip.x264.HUN-FULCRUM',
    'Love.Lost.and.Found.2021.1080p.AMZN.WEB-DL.DD+5.1.H.264-iKA',
    'Ace.Ventura.When.Nature.Calls.1995.720p.Open.Matte.WEB-DL.DD5.1.x264.Hun-L77',
    'Crossroads.1986.BDRip.x264.HUN-CRW',
    'The.Adventure.Of.A.R.I.My.Robot.Friend.2020.1080p.Bluray.DTS-HD.MA.5.1.X264-EVO',
    'Jacob.Mimmi.and.the.Talking.Dogs.2019.1080p.BluRay.DD2.0.H264.HuN-No1',
    'Jacob.Mimmi.and.the.Talking.Dogs.2019.WEBRip.x264.HuN-No1',
    'Richard.Jewell.2019.1080p.BluRay.DTS.x264.HuN-No1',
    'Richard.Jewell.2019.720p.BluRay.DD5.1.x264.HuN-No1',
    'Richard.Jewell.2019.BDRip.x264.HuN-No1',
    'Alice.1990.HDTV.1080i.MPEG-4.Hun-Pirosasz',
    'Alice.1990.BluRay.720p.x264.Hun-Pirosasz',
    'Lost.Boys.2020.FiNNiSH.1080p.WEB.H264-TOOSA',
    'The.Midas.Touch.2020.720p.WEB.h264-WATCHER',
    'Price.Of.Love.2020.720p.WEB.h264-WATCHER',
    'Price.Of.Love.2020.1080p.WEB.h264-WATCHER',
    'Locked.Inside.2020.720p.WEB.h264-WATCHER',
    'Locked.Inside.2020.1080p.WEB.h264-WATCHER',
    'Bigfoot.The.Conspiracy.2020.720p.WEB.h264-WATCHER',
    'Alcatraz.Prison.Escape.Deathbed.Confession.1080p.WEB.h264-WATCHER',
    'A Valentin-napi mészárlás 1080p',
    'The.Man.Who.Walked.Around.the.World.2020.720p.WEB.h264-DOCiLE',
    'The.Man.Who.Walked.Around.the.World.2020.WEB.h264-DOCiLE',
    'Life.To.Afterlife.Death.And.Back.2019.1080p.WEB.h264-ASCENDANCE',
    'Life.To.Afterlife.Death.And.Back.2019.720p.WEB.h264-ASCENDANCE',
    'Engedetlen.2018.720p.FMIO.WEB-DL.AAC2.0.H.264.HUN-FULCRUM',
    'Metro.Im.Netz.des.Todes.2013.German.DL.1080p.BluRay.AVC-SAViOURHD',
    'Salem.Witch.Trials.2002.PART2.PROPER.RERiP.1080p.BluRay.x264-SADPANDA',
    'Maceras.ugyek.2001.FMIO.WEBRip.x264.HUN-FULCRUM',
    'Cinema Paradiso 1080p REMUX',
    'The.Evil.Twin.2021.720p.WEB.h264-BAE',
    'Az Alhambra jóslata',
    'Always.2011.1080p.BluRay.x264-REGRET',
    'Heiraten.ist.nichts.fuer.Feiglinge.2015.German.720p.Webrip.x264-TVARCHiV',
    'Heiraten.ist.nichts.fuer.Feiglinge.2015.German.1080p.Webrip.x264-TVARCHiV',
    'Crossroads.A.Story.of.Forgiveness.2007.DVDRip.x264.HUN-GEO',
    'Szokevenyvonat.1985.RETAIL.HUN.PAL.DVD9-TRASH',
    'Andrey.Rublev.1966.Original.Cut.SUBBED.1080p.BluRay.x264-VALiS',
    'The.Reading.Room.2005.DVDRip.x264.HUN-GEO',
    'Mord.am.Meer.2005.German.Webrip.x264-TVARCHiV',
    'Turist.2014.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Turist.2014.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'K .O. - A kiütés',
    '10.Rules.for.Falling.in.Love.2012.DVDRip.x264.HUN-GEO',
    'Battle.Los.Angeles.2011.Open.Matte.720p.STZ.WEB-DL.DTS.x264-Hun-L77',
    'Road.House.1989.REMASTERED.1080p.BluRay.x264.Hun-Made',
    'Vipera.akcio.1988.HUN.DVDRip.x264-TOXI',
    'Ravage.2019.AMZN.WEBRip.HunSub.x264-RolandS',
    'Felemelkedés 1080i',
    'Veszelyes.terep.1986.HUN.DVDRip.x264-TOXI',
    'Veres.penz.1991.HUN.DVDRip.x264-TOXI',
    'Vegso.leszamolas.1989.HUN.DVDRip.x264-TOXI',
    'A.funyiroember.1992.2xHUN.720p.BluRay.x264-TOXI',
    'A fenevad gyomrában',
    'A.felelem.orai.1990.RETAIL.HUN.PAL.DVD9-TRASH',
    'On the Line - The Race of Champions 1080p',
    'Száz nap Palermóban 1080i',
    'Mission.Impossible.1996.1080p.UHD.BluRay.DD+5.1.x264.HuN-TRiNiTY',
    'Breakfast.on.Pluto.2005.1080p.AMZN.WEB-DL.x264.DD+5.1.Hun-MrDeta',
    'Home.Alone.1990.READ.NFO.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY',
    'De-Lovely - Ragyogó évek 1080i',
    'Grace.Unplugged.2013.1080p.BluRay.x264.DD2.0.HuN-BaKeR',
    'Penguins.Life.on.the.Edge.2020.720p.WEB.h264-KOGi',
    'Árnyék nélkül 2',
    'In.the.Footsteps.of.Elephant.2020.720p.WEB.h264-KOGi',
    'Clouds.2020.1080p.WEB.h264-KOGi',
    'Marvel.Studios.Expanding.the.Universe.2019.720p.WEB.h264-KOGi',
    'Marvel.Studios.Expanding.the.Universe.2019.1080p.WEB.h264-KOGi',
    'Diving.with.Dolphins.2020.720p.WEB.h264-KOGi',
    'Snitch.2013.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY',
    'A.Celebration.Of.The.Music.From.Coco.2020.1080p.WEB.h264-KOGi',
    'A.Celebration.Of.The.Music.From.Coco.2020.720p.WEB.h264-KOGi',
    'Angel.Heart.1987.1080p.UHD.BluRay.DD+5.1.HDR.x265.HuN-TRiNiTY',
    'K .O. - A kiütés 720p',
    'Segítség, felnőttem! 1080p REMUX',
    'A múlt vétkei',
    'The.Good.Heart.2009.720p.BluRay.DD5.1.x264.Hun-ARROW',
    'Reggeli a Plútón 1080p',
    'Grace.Unplugged.2013.BDRip.x264.HuN-BaKeR',
    'The.Eiger.Sanction.1975.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY',
    'K .O. - A kiütés 1080i',
    'Mostohaapa 1080p',
    'Balhé Bronxban 1080p',
    'Flight.of.the.Navigator.1986.REMASTERED.1080p.BluRay.Remux.AVC.DTS.Hun-MrDeta',
    'A sárkány viadala 1080p',
    'Wreck.2020.1080p.AMZN.WEB-DL.DDP2.0.H.264-Meakes',
    'Easy.to.Learn.Hard.to.Master.The.Fate.of.Atari.2017.WEB.H264-13',
    'Nintendo.Quest.2015.WEB.H264-13',
    'Fél-profi 1080p REMUX',
    'Knives.Out.2019.READ.NFO.CUSTOM.HUN.PAL.DVD9-WB',
    'Alabama.Snake.2020.WeBRiP.x264.HuNSuB-BAYLEE',
    'American.Kamasutra.2018.720p.Web-DL.x264-GEO',
    'The.Indian.Runner.1991.CUSTOM.HUN.PAL.DVD9-WB',
    'Godzilla.1998.2160p.UHD.BluRay.DD+7.1.HDR.x265.HuN-TRiNiTY',
    'The.Indian.Runner.1991.CUSTOM.HUN.PAL.DVDR-WB',
    'Gondoskodom rólad 720p',
    'A.Fenevad.2007.BluRay.1080p.x264.Hun-Pirosasz',
    'Csak egy harapás',
    'Space.Station.76.2014.RETAiL.HUN.PAL.DVD9-ISO',
    'The.Reading.Room.2005.1080p.AMZN.WEB-DL.DDP2.0.H.264.HuN-HaNTaH',
    'Behind.Enemy.Lines.1986.BDRiP.x264-GUACAMOLE',
    'Kill.The.City.2.2020.DVDRip.x264-AEROHOLiCS',
    'Archive.2020.720p.BluRay.x264-PFa',
    'Maci Laci karácsonya, avagy sztárok a fenyő alatt 1080p',
    'A király látogatása',
    'Bombshell.2019.READ.NFO.1080p.BluRay.DD5.1.x264.HuN-prldm',
    'Bombshell.2019.READ.NFO.720p.BluRay.DD5.1.x264.HuN-prldm',
    'Bombshell.2019.READ.NFO.BDRip.x264.HuN-prldm',
    'Willow.1988.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.Hun-MrDeta',
    'Sound.of.Metal.2020.1080p.AMZN.WEB-DL.DDP5.1.H.264-CMRG',
    '1917.2019.READ.NFO.1080p.BluRay.DDP7.1.x264.HuN-prldm',
    '1917.2019.READ.NFO.720p.BluRay.DD5.1.x264.HuN-prldm',
    '1917.2019.READ.NFO.BDRip.x264.HuN-prldm',
    'Big.Time.Adolescence.2019.WeBRiP.x264.HuNSuB-BAYLEE',
    'Az asztronauta',
    'Dark.Waters.2019.READ.NFO.1080p.BluRay.DDP5.1.x264.HuN-prldm',
    'Dark.Waters.2019.READ.NFO.720p.BluRay.DD5.1.x264.HuN-prldm',
    'Dark.Waters.2019.READ.NFO.BDRip.x264.HuN-prldm',
    'Sidewalks of New York 1080p',
    'Clue.1985.CUSTOM.HUN.PAL.DVDR-WB',
    'Doom.2005.UNRATED.EXTENDED.CUT.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Nyero.testek.1984.HUN.DVDRip.x264-TOXI',
    'Showdown.in.Manila.2016.HUNSUB.720p.BluRay.x264-TOXI',
    'Donto.osszecsapas.1993.HUN.1080p.BluRay.x264-TOXI',
    'Never.Surrender.A.Galaxy.Quest.Documentary.2019.720p.WEB.h264-OPUS',
    'Never.Surrender.A.Galaxy.Quest.Documentary.2019.1080p.WEB.264-OPUS',
    'Mohó kopó, okos lopó 1080p',
    'Lovatett.Lovagok.2000.1080p.AMZN.WEB-DL.x264.Hun-Pirosasz',
    'Blackthorn.2011.1080p.Blu-ray.Remux.AVC.DTS-HD.MA.5.1 - KRaLiMaRKo',
    'Core.Striking.Combinations.And.Tricky.Attacks.by.Firas.Zahabi.720p.WEB-DL.x264-ZED',
    'The.Craft.Legacy.2020.1080p.BluRay.DTS-HD.X264-CMRG',
    'Worlds.of.Ursula.K.Le.Guin.2018.720p.WEBRip.X264-iPlayerTV',
    'Holtunkiglan.1999.720p.BluRay.x264.Hun-Pirosasz',
    'Holtunkiglan.1999.1080p.BluRay.x264.Hun-Pirosasz',
    'License.to.Drive.1988.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.Hun-MrDeta',
    'Infidel.2019.BDRip.x264-CAVIEZEL',
    'Beyond.the.Woods.2020.1080p.WEB-DL.DD2.0.H.264-EVO',
    'Paint.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'The.Curse.of.Hobbes.House.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Finding.Jack.Charlton.2020.BDRip.x264-ORBS',
    'The.Rodeo.Thief.2021.1080p.WEB-DL.AAC2.0.x264-EVO',
    'Sky.Sharks.2020.1080p.Bluray.DTS-HD.HR.7.1.X264-EVO',
    'Cowboy.Strong.Building.Functional.Power.by.Gary.Calcagno.720p.WEB-DL.x264-ZED',
    'Radium.Girls.2020.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO',
    'The.Prestige.2006.1080p.UHD.BluRay.DD+5.1.x264.HuN-TRiNiTY',
    'Clifton.Hill.2019.1080p.WEB-DL.DD+5.1.H264.HuN-No1',
    'Clifton.Hill.2019.720p.WEB-DL.DD+5.1.H264.HuN-No1',
    'Follow.Me.2020.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.Hun-MrDeta',
    'Clifton.Hill.2019.WEBRip.x264.HuN-No1',
    'Inga.Lindstrom.Merre.Keresselek.WEB-DLRip.x264.HUN-EKG',
    'Decemberi.Menyasszony.WEB-DLRip.x264.HUN-EKG',
    'Escape.From.Pretoria.2020.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.Hun-MrDeta',
    'Greenland.2020.COMPLETE.UHD.BLURAY-B0MBARDiERS',
    'Hol az igazság',
    'The.Godfather.Coda.The.Death.of.Michael.Corleone.2020.REMASTERED.720p.BluRay.DD5.1.x264',
    'Caniba.2017.BDRip.x264-BiPOLAR',
    'Angele.1934.BDRip.x264-BiPOLAR',
    'High.Society.1956.720p.HDTV.x264-REGRET',
    'Doom.2005.UNRATED.EXTENDED.BDRip.x264.DD.5.1.HUN-GEO',
    'No.Gi.Power.Passing.by.Matheus.Diniz.720p.WEB-DL.x264-ZED',
    'Minden, amit tudni akartál az elviteles ételről',
    'Mohó kopó, okos lopó 720p',
    'Holiday.Inn.1942.1080p.BluRay.x264.Hun-TRT',
    'The.Roads.Not.Taken.2020.1080p.WEB-DL.H264.AC3-EVO',
    'Faust.Love.of.the.Damned.2000.BDRIP.X264.INTERNAL-WATCHABLE',
    'The.De.La.Riva.System.Part1.The.Foundation.by.Mikey.Musumeci.720p.WEB-DL.x264-SZLS',
    'Tom.and.Jerry.Meet.Sherlock.Holmes.2010.1080p.BluRay.REMUX.VC1.DD5.1.HuN-TRiNiTY',
    'Robo 1080p',
    'Holly.Woody.tortenet.2002.COMPLETE.RETAIL.HUN.PAL.DVD5-TRASH',
    'Oblivion.2013.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY',
    'Aviva.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Paintball.Massacre.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'The.Kid.Detective.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Urban.Explorer.2011.1080p.BluRay.x264.Hunsub-Pirosasz',
    'The.Closet.2020.1080p.WEB-DL.DD2.0.H.264-EVO',
    'The.Lucky.One.2012.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY',
    'Lupin.III.The.First.2020.1080p.WEB-DL.DD2.0.H.264-EVO',
    'Army.of.One.2020.1080p.WEB-DL.AAC2.0.H.264-EVO',
    'Scalps.1983.DVDRip.x264.Hunsub-Pirosasz',
    'Mangue.Negro.2008.DVDRip.x264.Hunsub-Pirosasz',
    'Brokeback.Mountain.2005.1080p.BluRay.REMUX.VC1.DTS-HD.MA.5.1.HuN-TRiNiTY',
    'Black.Water.Abyss.2020.BDRip.x264-WaLMaRT',
    'The.Wretched.2019.COMPLETE.DVDR-JFKDVD',
    'The.Outpost.2020.DVDR-JFKDVD',
    'The.First.Deadly.Sin.1980.1080p.AMZN.WEB-DL.H.264.Hun-DOZSO',
    'Cujo.1983.READ.NFO.1080p.BluRay.DTS.x264.HuN-Apex',
    'BLACKPINK.Light.Up.the.Sky.2020.720p.NF.WEB-DL.DDP5.1.x264-LAZY',
    'Back.to.the.Future.Part.III.1990.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY',
    'BLACKPINK.Light.Up.the.Sky.2020.NF.WEB-DL.DD5.1.x264-LAZY',
    'High.Life.2018.READ.NFO.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-No1',
    'High.Life.2018.READ.NFO.1080p.BluRay.DD+5.1.x264.HuN-No1',
    'Dont.Kill.It.2016.CUSTOM.HUN.PAL.DVDR-WB',
    'Hulk - Ahol a szörnyek lakoznak 1080p',
    'Orult.kuldetes.4.1986.HUN.READNFO.720p.BluRay.x264-TOXI',
    'Orult.kuldetes.3.1984.HUN.READNFO.720p.BluRay.x264-TOXI',
    'Back.to.the.Future.Part.II.1989.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY',
    'Orult.kuldetes.2.1983.HUN.READNFO.720p.BluRay.x264-TOXI',
    'Orult.kuldetes.1.1982.HUN.READNFO.720p.BluRay.x264-TOXI',
    'The.Assignment.2016.BDRip.x264.HuN-BAYLEE',
    'Helen 720p',
    'Hubie.Halloween.2020.CUSTOM.HUN.PAL.DVDR-WB',
    'Brahms.The.Boy.II.2020.CUSTOM.HUN.PAL.DVDR-WB',
    'High.Life.2018.READ.NFO.720p.BluRay.DD5.1.x264.HuN-No1',
    'High.Life.2018.READ.NFO.BDRip.x264.HuN-No1',
    'Dolly Kitty és a fénylő csillagok 1080p',
    'Anunnaki.2017.HDTV.x264-GEO',
    'Anunnaki.2017.1080p.HDTV.x264-GEO',
    'Sing.2016.2160p.BluRay.REMUX.HEVC.TrueHD.7.1.Atmos-HUN-UFO971',
    'The.Scorpion.King.2002.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Treasure.Island.1990.480p.AMZN.WEBrip.DDP2.0.x264.2xHun-DenZo',
    'Treasure.Island.1990.720p.AMZN.WEBrip.DDP2.0.x264.2xHun-DenZo',
    'Treasure.Island.1990.1080p.AMZN.WEB-DL.DDP2.0.H264.2xHun-DenZo',
    'Du.Cote.d.Orouet.1971.DVDRip.x264-BiPOLAR',
    'Ramrod.1947.BDRip.x264-BiPOLAR',
    'The.Garden.1995.DVDRip.x264-BiPOLAR',
    'Blue.Jeans.1958.DVDRip.x264-BiPOLAR',
    'The.Black.Report.1963.BDRip.x264-BiPOLAR',
    'Black.Test.Car.1962.720p.BluRay.x264-BiPOLAR',
    'What.Moves.Me.1989.720p.BluRay.x264-BiPOLAR',
    'Time.of.the.Wolf.2003.720p.BluRay.x264-PHOBOS',
    'Gags.The.Clown.2018.1080p.WEB-DL.H264.Hunsub-Pirosasz',
    'Back.to.the.Future.1985.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY',
    'The.Assignment.2016.720p.BluRay.DD5.1.x264.HuN-No1',
    'The.Assignment.2016.1080p.BluRay.DTS.x264.HuN-No1',
    'Pierrot.le.Fou.1965.1080p.Remux.AVC.LPCM.1.0.HUN-CRW',
    'Arat a szerelem',
    'Alice.etterme.1969.BDRip.x264.2xHun-eStone',
    'Meatball.Machine.2005.DVDRip.x264.Hunsub-Pirosasz',
    'The.Princess.Switch.2018.1080p.NF.WEB-DL.DDP5.1.H.264.HUN.ENG-SFY',
    'The.Princess.Switch.2018.720p.NF.WEB-DL.DDP5.1.H.264.HUN.ENG-SFY',
    'The.Princess.Switch.2018.NF.WEBRip.x264.HUN-SFY',
    'Johnny.English.Strikes.Again.2018.1080p.UHD.BluRay.DTS.HDR.x265.HuN-TRiNiTY',
    'Days.of.Thunder.1990.1080p.UHD.BluRay.DD+5.1.HDR.x265.HuN-TRiNiTY',
    'Old.37.2015.WEB-DL.720p.H264.Hunsub-Pirosasz',
    'A.tanu.1969.UNCENSORED.Hybrid.HDTV.x264.Hun-boOk',
    'A.tanu.1969.UNCENSORED.Hybrid.720p.HDTV.AAC2.0.x264.Hun-boOk',
    'A.tanu.1969.UNCENSORED.Hybrid.1080p.HDTV.AAC2.0.x264.Hun-boOk',
    'Simlis.Taxisok.1983.HDTV.1080i.MPEG-2.Hun-Pirosasz',
    'Secrets.of.Shaolin.with.Jason Scott.Lee.2012.docu.1080p.bluray.x264-pussyfoot',
    'Swallow.2019.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-No1',
    'A.Summer.Romance.2019.1080p.WEB-DL.DD+5.1.H264.HuN-No1',
    'A.Summer.Romance.2019.720p.WEB-DL.DD+5.1.H264.HuN-No1',
    'Back.to.the.Future.Part.III.1990.2160p.UHD.BluRay.REMUX.TrueHD.Atmos.7.1.HDR10+.HEVC.HuN-TRiNiTY',
    'Liliom ösvény 1080p',
    'Swallow.2019.1080p.BluRay.DD+5.1.x264.HuN-No1',
    'Swallow.2019.720p.BluRay.DD5.1.x264.HuN-No1',
    'Swallow.2019.BDRip.x264.HuN-No1',
    'Corpus Christi 1080p',
    'The.King.of.Staten.Island.2020.DVDR-JFKDVD',
    'The.High.Note.2020.DVDR-JFKDVD',
    'A Cincinnati kölyök 1080p REMUX',
    'The.Burnt.Orange.Heresy.2019.DVDR-JFKDVD',
    'Amerikai.kiborg.1993.2xHUN.720p.BluRay.x264-TOXI',
    'Ki.vagy.doki.1996.HUN.720p.BluRay.x264-TOXI',
    'Scary.Bride.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Pierrot.le.Fou.1965.BDRip.x264.HUN-CRW',
    'Mothers.of.the.Bride.2015.WEBRiP.DD2.0.x264.Hun-ARROW',
    'Mothers.of.the.Bride.2015.1080p.AMZN.WEB-DL.DDP5.1.H.264.Hun-ARROW',
    'Birds.of.Prey.And.the.Fantabulous.Emancipation.of.One.Harley.Quinn.2020.2160p.UHD.REMUX.DV.DL.DTS-HD',
    'Evil.Eye.2020.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO',
    'Back.to.the.Future.Part.II.1989.2160p.UHD.BluRay.REMUX.TrueHD.Atmos.7.1.HDR10+.HEVC.HuN-TRiNiTY',
    'Nocturne.2020.1080p.AMZN.WEB-DL.DDP5.1.H.264-EVO',
    'Save Yourselves.2020.1080p.Bluray.DTS-HD.MA.5.1.X264-EVO',
    'Rossz.Hold.1996.BDRemux.1080p.AVC.Hun-Pirosasz',
    'Batman.Death.in.the.Family.2020.1080p.Bluray.X264-EVO',
    'Totally.Under.Control.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Monster.Force.Zero.2020.1080p.WEB-DL.DD2.0.H.264-EVO',
    'The.Wall.of.Mexico.2020.1080p.WEB-DL.DD5.1.H.264-EVO',
    'Die.Goldfische.2019.1080p.BluRay.DD5.1.x264.Hun-ARROW',
    'Tremors.Shrieker.Island.2020.1080p.BluRay.DTS-HD.X264-CMRG',
    'Die.Goldfische.2019.720p.BluRay.DD5.1.x264.Hun-ARROW',
    'Bűn és bűnhődés',
    'Ujra.Nyeregben.A.Het.Mesterlovesz.1972.BluRay.1080p.x264.Hun-Pirosasz',
    'Jason.Bourne.2016.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY',
    'Fekete.szivarvany.1989.BDRip.x264.Hun-eStone',
    'Adventureland.2009.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Runaway.Jury.2003.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY',
    'The.Poison.Rose.2019.1080p.BluRay.Remux.AVC.TrueHD.5.1.HUN-GS88',
    'The.Poison.Rose.2019.1080p.BluRay.DD5.1.x264.HUN-GS88',
    'Adrenalin',
    'Dreamer.Inspired.by.a.True.Story.2005.1080p.AMZN.WEB-DL.DDP5.1.H.264.HuN-HaNTaH',
    'Spartacus.1960.2160p.UHD.BluRay.REMUX.DTS-HD.MA.7.1.HDR.HEVC.HuN-TRiNiTY',
    'National Theatre Live - Medea 1080p',
    'Wheels.on.Meals.1984.REMASTERED.1080p.BluRay.x264.2xHun-TRT',
    'Yip.Man.4.2019.PROPER.BDRiP.x264.HUN-Legacy',
    'Spacehunter.1983.Custom.HUN.MPEG-2.1080p.BluRay.REMUX-Janus',
    'Sharks.vs.Dolphins-Blood.Battle.2020.WEB.h264-CAFFEiNE',
    'The.Barge.People.2018.720p.BluRay.x264-x0r',
    'John.Wick.Chapter.2.2017.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY',
    'John.Wick.2014.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY',
    'Guest.Artist.2020.1080p.WEB-DL.H264.AC3-EVO',
    'White.Lie.2020.1080p.WEB-DL.H264.AC3-EVO',
    'Guest.Of.Honour.2020.1080p.WEB-DL.H264.AC3-EVO',
    'Wrong.Cops.2013.720p.BluRay.x264-x0r',
    'Rad.1986.720p.BluRay.x264-x0r',
    'Sugar.Hill.1993.720p.BluRay.x264-x0r',
    'Spy.Cat.2018.FLEMISH.DVDRip.x264-BARGAiN',
    'A.Panamai.Szabo.2001.BluRay.720p.x264.Hun-Pirosasz',
    'The Great Space War 720p',
    'Crumb 720p',
    'The.City.Without.Jews.1924.SUBFRENCH.720p.BluRay.x264-THREESOME',
    'Gundala.2019.720p.BluRay.x264-x0r',
    'Bringing Down a Dictator',
    'The.City.Without.Jews.1924.SUBFRENCH.1080p.BluRay.x264-THREESOME',
    'Ostwind.3.Aufbruch.nach.Ora.2017.720p.BluRay.DD5.1.x264.Hun-ARROW',
    'Ostwind.3.Aufbruch.nach.Ora.2017.BDRiP.DD2.0.x264.Hun-ARROW',
    'Inferno.A.bunos.varos.1999.COMPLETE.RETAIL.HUN.PAL.DVD5-TRASH',
    'Kek.Melyseg.2003.BluRay.720p.x264.Hun-Pirosasz',
    'Ada-t polgármesternek!',
    'A jó pápa - XXIII. János',
    'Wheels.on.Meals.1984.REMASTERED.720p.BluRay.x264-USURY',
    'The.Highwaymen.2019.WEBRip.x264.Hunsub-eStone',
    'Red.Heat.1988.1080p.UHD.BluRay.DD+5.1.HDR.x265.HuN-TRiNiTY',
    'Red.Heat.1988.720p.REMASTERED.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Rampage.2018.UHD.BluRay.2160p.REMUX.Dolby.Vision.SL.TrueHD.Atmos.7.1.HEVC.HUN-TRiNiTY',
    'The.Hunger.Games.Mockingjay.Part.2.2015.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY',
    'The.Hunger.Games.Mockingjay.Part.1.2014.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY',
    'The.Hunger.Games.Catching.Fire.2013.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY',
    'The.Hunger.Games.2012.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY',
    'Superman.Batman.Public.Enemies.2009.CUSTOM.MULTi.1080p.BluRay.x264-D4KiD',
    'Pay Day 1080p',
    'American.Fighter.2020.1080p.WEBRip.X264.DD.5.1-EVO',
    'Open.24.Hours.2020.720p.WEBRip.X264.AC3-EVO',
    'Open.24.Hours.2020.1080p.WEBRip.X264.DD.5.1-EVO',
    'One.Way.To.Denmark.2020.1080p.WEBRip.X264.DD.5.1-EVO',
    'One.Way.To.Denmark.2020.720p.WEBRip.X264.AC3-EVO',
    'A Nice Girl Like You',
    'Open.24.Hours.2020.1080p.WEB-DL.H264.AC3-EVO',
    'One.Way.To.Denmark.2020.1080p.WEB-DL.H264.AC3-EVO',
    'Vörös zsaru BD50',
    'Calcutta.1946.720p.BluRay.x264-x0r',
    'RoboCop.2.1990.720p.BluRay.x264-x0r',
    'The.Big.Sick.2017.1080p.BluRay.DD5.1.x264.HuN-prldm',
    'The.Big.Sick.2017.720p.BluRay.DD5.1.x264.HuN-prldm',
    'The.Big.Sick.2017.BDRip.x264.HuN-prldm',
    'End.of.Sentence.2019.720p.BluRay.DD5.1.x264-iFT',
    'Every Secret Thing 720p',
    'Hotel Plaza 1080i',
    'The.Very.Excellent.Mr.Dundee.2020.720p.AMZN.WEBRip.DDP5.1.X.264-EVO',
    'The.Very.Excellent.Mr.Dundee.2020.1080p.AMZN.WEB-DL.DDP5.1.H.264-EVO',
    'Jimmy O. Yang - Good Deal',
    'Holky.z.porcelanu.1974.720p.HDTV.x264-DON',
    'Indianske.leto.1995.720p.HDTV.x264-DON',
    'Katie Fforde - Kilátás a tengerre 720p',
    'Magyarok 1080i',
    'Resistance.2020.720p.BluRay.DD5.1.x264-iFT',
    'Tukrom.Tukrom.1996.WEB-DL.1080p.x264.Hun-Pirosasz',
    'Dosed.2016.WEB.h264-RedBlade',
    'Captain.Underpants.The.First.Epic.Movie.2017.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY',
    'Resistance.2020.1080p.BluRay.DTS.x264-iFT',
    'T2.Trainspotting.2017.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY',
    'The.Texas.Chainsaw.Massacre.The.Beginning.2006.1080p.CUSTOM.USA.BD25.AVC.DD.5.1-HuN-Jak68',
    'Yvonne.Orji.Momma.I.Made.It.2020.WEB.h264-NiXON',
    'Perfect.Drug.2012.BDRip.x264-BARGAiN',
    'Michelle.Wolf.Nice.Lady.2017.WEB.h264-NiXON',
    'George.Lopez.The.Wall.Live.from.Washington.D.C.2017.WEB.h264-NiXON',
    'Ready.Player.One.2018.2160p.UHD.BluRay.TrueHD7.1.HDR.x265.HuN-SnyderHD',
    'A.Jackson.megyei.borton.1976.HUN.1080i.HDTV.x264-TOXI',
    'Idegenek.kozott.1974.HUN.READNFO.1080i.HDTV.x264-TOXI',
    'Az.eroszak.eve.1991.HUN.READNFO.720p.WEB-DL.x264-TOXI',
    'A.Tokeletes.harcos.2008.HUN.720p.BluRay.x264-TOXI',
    'Szuperexpressz.1975.HUN.READNFO.720p.BluRay.x264-TOXI',
    'Feeling.Minnesota.1996.1080p.AMZN.WEB-DL.DDP5.1.H.264.HuN-HaNTaH',
    'Dreamgirls.2006.READ.NFO.1080p.BluRay.DD5.1.x264.HuN-Apex',
    'Bad.Boys.for.Life.2020.CUSTOM.HUN.PAL.DVD9-WB',
    'Azooma 720P',
    'Esther.Povitsky.Hot.For.My.Name.2020.HDTV.x264-YesTV',
    'The.Day.the.Earth.Caught.Fire.1961.720p.BluRay.AAC1.0.x264-EbP',
    'Gyujtohatas.1992.WEB-DL.1080p.x264.Hun-Pirosasz',
    'Red.Dust.1990.1080p.BluRay.x264-BiPOLAR',
    'Borderland.2007.RETAiL.HUN.PAL.DVDR-WB',
    'The.Matrix.Revolutions.2003.REPACK.UHD.BluRay.2160p.REMUX.Dolby.Vision.SL.TrueHD.7.1.Atmos.HEVC.HUN-',
    'A játék ördöge 1080p',
    'The Report',
    'Kain.gyermekei.2014.720p.HBO.WEB-DL.AAC2.0.H.264-pcroland',
    'Kain.gyermekei.2014.480p.HBO.WEBRip.AAC2.0.x264-pcroland',
    'A.bosszu.nyomai.2019.720p.BluRay.x264.DD2.0.HuN-BaKeR',
    'Halloween.2018.1080p.BluRay.REMUX.AVC.DTS-HD.MA.7.1.Hun-MrDeta',
    'The.Jacket.2005.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-SmT',
    'Hunyady.Sandor.Feketeszaru.cseresznye.2019.1080i.HDTV.x264.HUN-14V1',
    'Joy.Ride.2.Dead.Ahead.2008.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-SmT',
    'Joy.Ride.2.Dead.Ahead.2008.BDRip.x264.HuN-SmT',
    'Cápák lázadása',
    'Cápák lázadása 1080i',
    'Cube.Zero.2004.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.Hun-MrDeta',
    'Earthquake.Bird.2019.720p.NF.WEB-DL.DDP5.1.x264-NTG',
    'Earthquake.Bird.2019.1080p.NF.WEB-DL.DDP5.1.Atmos.H264-CMRG',
    'Pisztolymuvesz.1988.HUN.720p.BluRay.x264-TOXI',
    'The.Far.Country.1954.BDRip.x264.HUN-CRW',
    'Once.Upon.a.Holiday.2015.1080p.NF.WEB-DL.DDP5.1.x264.HUN-POGGERS',
    'Once.Upon.a.Holiday.2015.720p.NF.WEB-DL.DDP5.1.x264.HUN-POGGERS',
    'Once.Upon.a.Holiday.2015.CUSTOM.WEBRip.x264.HUN-POGGERS',
    'Varda.by.Agnes.2019.BDRip.x264-GHOULS',
    'Starship.Troopers.3.Marauder.2008.1080p.EUR.BluRay.AVC.TrueHD.5.1-Razzau',
    'American Graffiti 2. BDRip',
    'The.Blob.1988.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.Hun-MrDeta',
    'A.Good.Woman.2004.1080p.AMZN.WEB-DL.DD+5.1.H264.HuN-TRiNiTY',
    'Fun.with.Dick.and.Jane.2005.1080p.AMZN.WEB-DL.DD+5.1.H264.HuN-TRiNiTY',
    'Catacombs.2007.1080p.AMZN.WEB-DL.DD+2.0.H264.HuN-TRiNiTY',
    'The.Princess.and.the.Dragon.2018.WEBRip.x264.HuN-No1',
    'Dominion.Prequel.To.The.Exorcist.2005.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Baby.Baby.Baby.2015.1080p.AMZN.WEB-DL.DD+5.1.H264.HuN-TRiNiTY',
    'A.Royal.Christmas.Ball.2017.HUN.WEBRiP.x264-ARROW',
    'Hell.Night.1981.DVDRip.x264.Hunsub-Pirosasz',
    'Night.Of.The.Lepus.1972.DVDRip.x264.Hunsub-Pirosasz',
    'A.Royal.Christmas.Ball.2017.HUN.1080p.AMZN.WEB-DL.DDP5.1.H264-ARROW',
    'The.Smell.Of.Us.2014.1080p.BluRay.x264.DD5.1.Hun-MrDeta',
    'A bika tüze',
    'A csendmadár',
    'The.Perfect.Weapon.1991.1080p.BluRay.REMUX.AVC.DTS-HD.MA.2.0.Hun-MrDeta',
    'Visszaszámlálás - A berlini fal felemelkedése és bukása',
    'Bad.Blood.1994.DVDRip.DD2.0.x264.HUN-GuRF',
    'Nyakas kakas',
    'Goblin',
    'Túl a gyászon 720p',
    'Shutter.Island.2010.RETAiL.HUN.PAL.DVD9-ISO',
    'Resident.Evil.Apocalypse.2004.REMUX.1080p.Blu-ray.MPEG-2.LPCM.5.1.Hun-Fodyna',
    'Amelia 2.0',
    'The.Devils.Double.2011.1080p.Bluray.Remux.AVC.DTS-HD.MA.7.1.HUN-KuNgZi',
    'Paul.Blart.Mall.Cops.2.2015.REMUX.1080p.Blu-ray.DTS-HD.MA.5.1.AVC.HuN-HyperX',
    'Ellenségből testvérek',
    'Sivatagi Vihar - A hazugság háborúja',
    'Churchill és a háborús döntések',
    'Tuck.Everlasting.2002.HUN.WEBRiP.x264-ARROW',
    'Drágán add az életed!',
    'Ne nézz vissza!',
    'My.Adventures.With.Santa.2019.DVDRip.x264-FRAGMENT',
    'How.to.Train.Your.Dragon.2010.3D.BD25.MVC.TrueHD.7.1.HUN-HDPhoenix',
    'The.Glory.Guys.1965.BDRip.x264.HUN-CRW',
    'Dont.Let.Go.2019.BDRip.x264-AAA',
    'Hercules.2014.RETAiL.HUN.PAL.DVD9-ISO',
    'The.Land.Before.Time.IV.Journey.Through.the.Mists.1996.1080p.AMZN.WEB-DL.x264.DD+2.0.Hun-MrDeta',
    'The.Glory.Guys.1965.1080p.Remux.AVC.DTS.MA.2.0.HUN-CRW',
    'House.Arrest.2019.1080p.NF.WEB-DL.HIN-Multi.ATMOS.5.1-DD+5.1.x264-Telly',
    'The.Salton.Sea.2002.720p.AMZN.WEB-DL.DD+5.1..x264.Hun-L77',
    'Orok.tel.2018.HUN.WEBRiP.x264-ARROW',
    "Disappearances.2006.1080p.BluRay.REMUX.AVC.DD.5.1.HuN-BecK's",
    "One.Way.2006.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-BecK's",
    "The.Taking.of.Tiger.Mountain.2014.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-BecK's",
    "On.Golden.Pond.1981.1080p.BluRay.REMUX.AVC.DTS-HD.MA.2.0.HuN-BecK's",
    "On.Golden.Pond.1981.1080p.BluRay.DD2.0.x264.HuN-BecK's",
    'Klaus.2019.NF.WEBRiP.x264.HUN-Legacy',
    'Because.of.Winn-Dixie.2005.720p.BluRay.DD5.1.x264.Hun-boOk',
    'Korlátok nélkül 1080p',
    'Wild.Rose.2018.1080p.BluRay.X264-AMIABLE',
    'Road.to.Paloma.2014.BDRip.x264.HuN-BAYLEE',
    'Mammoth.2009.DVDRip.x264.HuN-BAYLEE',
    'Steve Irwin élete',
    'Diego.Maradona.2019.SUBBED.BDRip.x264-CADAVER',
    'Road.to.Paloma.2014.HUN.720p.BluRay.DD5.1.x264-ARROW',
    'Road.To.Paloma.2014.HUN.1080p.BluRay.DD5.1.x264-ARROW',
    'Steve Irwin élete 720p',
    'Pokoli.Bazis.2008.DVDRip.x264.Hunsub-Pirosasz',
    'Sherlock.Holmes.neveben.2012.NF.WEBRiP.x264.HUN-Legacy',
    '22.Jump.Street.2014.RETAiL.HUN.PAL.DVD9-ISO',
    'Steve Irwin élete 1080i',
    'Iron.Man.2.2010.RETAiL.HUN.PAL.DVD9-ISO',
    'Transylvania.6-5000.1985.1080p.BluRay.x264.Hun-TRT',
    'Klaus.2019.720p.WEB-DL.DD+5.1.H264.HuN-No1',
    'Klaus.2019.1080p.NF.WEB-DL.DDP5.1.Atmos.H.264.HUN.ENG-PTHD',
    'The.Turkey.Bowl.2019.1080p.WEB-DL.H264.AC3-EVO',
    'Feast.Of.The.Seven.Fishes.2019.1080p.WEB-DL.H264.AC3-EVO',
    'Yesterday.2019.RETAiL.HUN.PAL.DVDR-No1',
    'Mary.2019.BDRip.x264-AAA',
    'Angel.Has.Fallen.2019.1080p.Bluray.Atmos.TrueHD.7.1.x264-EVO',
    'Angel.Has.Fallen.2019.BDRip.x264-AAA',
    'Angel.Has.Fallen.2019.720p.BluRay.x264-AAA',
    'The.Current.War.2017.BDRip.X264-AMIABLE',
    'The.Current.War.2017.1080p.BluRay.X264-AMIABLE',
    'The.Current.War.2017.720p.BluRay.X264-AMIABLE',
    'Az.allampolgar.2016.REPACK.NF.WEBRiP.x264.HUN-Legacy',
    'Halj.mar.meg.2016.NF.WEBRiP.x264.HUN-Legacy',
    'Zombieland.2009.1080p.UHD.BluRay.DD+7.1.HDR.x265.HuN-TRiNiTY',
    'Fertozesveszely.1992.TVRiP.HUN.x264-CabCab',
    'Fast.and.Furious.Presents.Hobbs.and.Shaw.2019.1080p.BluRay.REMUX.AVC.TrueHD.7.1.HUN-No1',
    'Fast.and.Furious.Presents.Hobbs.and.Shaw.2019.2160p.REMUX.UHD.BluRay.TrueHD.7.1.HEVC.HuN-No1',
    'Oceans.Eleven.2001.Open.Matte.HDTV.1080i.DD5.1.H264.HuN-NiBe',
    'Upgrade.2018.RETAiL.HUN.PAL.DVDR-No1',
    'Boom.for.Real.The.Late.Teenage.Years.of.Jean-Michel.Basquiat.2017.LiMiTED.DVDRip.x264-CADAVER',
    'Robin.Hood.The.Rebellion.2018.DVDRip.x264-ARiES',
    'Cold.War.2018.1080p.BluRay.x264-DEPTH',
    'Cold.War.2018.720p.BluRay.x264-DEPTH',
    'Shipwrecked.1990.720p.WEB-DL.H264.2xHUN.ENG-Eastwood',
    'Warning.Sign.1985.AMZN.WEBRip.x264.HUN-Iquana',
    'Otoko-tachi.No.Yamato.2005.BluRay.720p.HUN.JPN.x264-DenZo',
    'A Poseidon katasztrófa',
    'Book.Club.2018.DVDR-JFKDVD',
    'Billionaire.Boys.Club.2018.COMPLETE.DVDR-JFKDVD',
    'The.White.Ribbon.2009.HUN.BDRiP.x264-ARROW',
    'Tuzolto.utca.25.1973.1080p.WEB-DL.H264.HUN-morgue',
    'Tuzolto.utca.25.1973.720p.WEB-DL.H264.HUN-morgue',
    'Requiem.1981.1080p.WEB-DL.H264.HUN-morgue',
    'Requiem.1981.720p.WEB-DL.H264.HUN-morgue',
    'Kilencedik.emelet.1977.1080p.WEB-DL.H264.HUN-morgue',
    'Falfuro.1985.WEB-DL.H264.HUN-morgue',
    'Circus.Maximus.1980.1080p.WEB-DL.H264.HUN-morgue',
    'Cha-Cha-Cha.1982.1080p.WEB-DL.H264.HUN-morgue',
    'Cha-Cha-Cha.1982.720p.WEB-DL.H264.HUN-morgue',
    'A.Pendragon.legenda.1974.1080p.WEB-DL.H264.HUN-morgue',
    'A.Pendragon.legenda.1974.720p.WEB-DL.H264.HUN-morgue',
    'A.legy.1980.1080p.WEB-DL.H264.HUN-morgue',
    'Alpha House',
    'Digimon.The.Movie.2000.REPACK.1080p.AVC.Bluray.HUN.ENG.GER-Taur1',
    'The.Old.Man.And.The.Gun.2018.720p.BluRay.x264-Replica',
    'The.Old.Man.And.The.Gun.2018.BDRip.x264-DiAMOND',
    'The.Old.Man.And.The.Gun.2018.1080p.BluRay.x264-Replica',
    'Colditz.2005.1080p.Remux.AVC.DTS.MA.5.1.HUN-CRW',
    'Godzilla.The.Planet.Eater.2018.1080p.NF.WEBRip.DDP5.1.x264-NTG',
    'Godzilla.The.Planet.Eater.2018.720p.NF.WEBRip.DDP5.1.x264-NTG',
    'Searching.2018.RETAiL.HUN.PAL.DVD9-No1',
    'Jack.Reacher.2012.2160p.UHD.BluRay.HDR.REMUX.DTS-HD.MA.7.1.HEVC.HUN-Legacy',
    'Vadászat az erdélyi aranyra',
    'Az.orszagut.fantomja.II.2003.Web-DLRip.x264.HUN-Iquana',
    'WALL-E 1080p REMUX',
    'Asterix.es.a.vikingek.2006.1080p.x264.HUN.FRE-FOX',
    'Brexit.The.Uncivil.War.2019.HDTV.x264-MTB',
    'Rape Zombie - Lust of the Dead 5',
    'Rape Zombie - Lust of the Dead 4',
    'Germinal.1993.720p.BluRay.DD5.1.x264.HUN-GS88',
    'Germinal.1993.BDRiP.x264.HUN-GS88',
    'Germinal.1993.1080p.BluRay.DD5.1.x264.HUN-GS88',
    'Searching.2018.RETAiL.HUN.PAL.DVDR-No1',
    'Éljenek a gyerekek!',
    'Az utolsó ördögök',
    'What.They.Had.2018.DVDRip.x264-LPD',
    'Time.Freak.2018.BDRip.x264-WiDE',
    'Saturn.3.1980.BDRip.x264.HUN-Iquana',
    'A.nagy.hajotores.1990.DVDRip.x264.HUN-Iquana',
    'The.Quiet.2005.READ.NFO.720p.HDTV.x264.HUN.ENG-Eastwood',
    'Dead.Birds.2004.DVDRip.x264.HUN-Iquana',
    'Beneath.Still.Waters.2005.BDRip.x264.Hun-NRB',
    'Egy.zseni.két.haver.egy.balek.1975.1080p.GER.Blu.ray.AVC.DTS.HD.MA.2.0.Remux.Hun-PlusUltra',
    'I.Robot.2004.Remux.1080p.Open.Matte.AVC.DTS-MA.5.1.Hun-PlusUltra',
    'Kanyar.2015.BluRay.720p.x264.Hun-Pirosasz',
    'Time.Freak.2018.1080p.BluRay.DTS-HD.MA5.1.X264-iFT',
    'Baby.Bumps.2017.RETAiL.HUN.PAL.DVDR-No1',
    'Gyilkologep.1994.DVDRip.x264.HUN-Iquana',
    'Any.Given.Sunday.Directors.Cut.[1999].BDRemux.1080p.VC-1.TrueHD5.1.HuN -d69a74',
    'Hozzámjössz 1080p',
    'Timescape.1992.DVDRip.x264.HUN-Iquana',
    'King.Arthur.Legend.of.the.Sword.2017.Open.Matte.1080p.WEB.DL.DD.H.264.Hun-PlusUltra',
    'A.kiraly.neveben.2.-Ket.vilag.BDRip.x264.HuN-BaKeR',
    'Survival.Family.2016.720p.BluRay.x264-REGRET',
    'Hi.Mom.1970.BDRip.x264.HUN-CRW',
    'Doll.in.the.Dark.2016.DVDRip.x264-SPOOKS',
    'Possession.1981.1080p.BluRay.x264.HUN.ENG-morgue',
    'You.May.Not.Kiss.the.Bride.2011.BDRip.x264.Hun-NRB',
    'Seraphim Falls - A múlt szökevénye',
    'Baby.Bumps.2017.WEBRip.x264.HuN-No1',
    'Baby.Bumps.2017.720p.WEB-DL.DD5.1.H264.HuN-No1',
    'Baby.Bumps.2017.1080p.WEB-DL.DD5.1.H264.HuN-No1',
    'The.Powerpuff.Girls.2002.1080p.WEB.DL.AAC.H264.Hun-PlusUltra',
    'Alien.Abduction.2005.DVDRip.x264.HUN-Iquana',
    'A.I.Assault.2006.DVDRip.x264.HUN-Iquana',
    'DNA.1996.WEBRip.x264.HUN-Iquana',
    'Hi.Mom.1970.1080p.Remux.AVC.LPCM.2.0.HUN-CRW',
    'Roxanne.1987.1080p.BluRay.DTS.x264.HuN-NiBe',
    'Good.Guys.Wear.Black.1978.BDRiP.x264.2XHUN-GS88',
    'Ghost.in.the.Shell.2017.1080p.UHD.BluRay.DD-EX5.1.x264.HUN-PTHD',
    'The.Equalizer.2.2018.READ.NFO.2160p.UHD.BluRay.HDR.REMUX.TrueHD.Atmos.7.1.HEVC.HUN-Legacy',
    'Telle.Mere.Telle.Fille.2017.RETAiL.HUN.PAL.DVD9-No1',
    'Night.of.the.Demons.2.1994.BDRiP.x264.HUN-GS88',
    'Summer.03.2018.1080p.WEB-DL.H264.AC3-EVO',
    'Loophole.2019.1080p.AMZN.WEB-DL.DDP2.0.H.264-NTG',
    "Elvira's.Haunted.Hills.2001.DVDRip.x264.Hun-NRB",
    'A majmok bolygója III. - A menekülés',
    'Brexit.The.Uncivil.War.2019.720p.HDTV.x264-MTB',
    'Earthstorm.2006.DVDRip.x264.HUN-Iquana',
    'The.Lovers.2017.HUN.CUSTOM.BDRiP.x264-ARROW',
    'The.Lovers.2017.HUN.CUSTOM.720p.BluRay.DD5.1.x264-ARROW',
    'The.Lovers.2017.CUSTOM.1080p.Bluray.DTS.x264.HUN-GS88',
    'Spiker.2007.DVDRip.x264.HUN-Iquana',
    'Alone.in.the.Dark.2005.DVDRip.x264.HUN-Iquana',
    'Cut.2000.WEBRip.x264.HUN-Iquana',
    'The.Black.Hole.2006.DVDRip.x264.HUN-Iquana',
    'Home.Again.2017.720p.BluRay.DD5.1.x264.HuN-No1',
    'Home.Again.2017.BDRip.x264.HuN-No1',
    'Windsor ház bukása',
    'Vágyak nyomában 1080p',
    'Crossed.Swords.1977.ReaD.NFo.ReTaiL.HUN.PAL.DVD9-MGM',
    'The.LEGO.Ninjago.Movie.2017.1080p.BluRay.REMUX.AVC.TrueHD.7.1.HuN-No1',
    'Tigris száműzetésben',
    'Game.of.Thrones.Conquest.and.Rebellion.An.Animated.History.of.the.Seven.Kingdoms.RETAiL.BDRip.x264.H',
    'The.LEGO.Ninjago.Movie.2017.1080p.BluRay.DTS.x264.HuN-No1',
    'The.LEGO.Ninjago.Movie.2017.720p.BluRay.DD5.1.x264.HuN-No1',
    'The.LEGO.Ninjago.Movie.2017.BDRip.x264.HuN-No1',
    'The Empire of Corpses 720p',
    'A tigriskirálynő',
    'Harakiri.1962.1080p.BluRay.AVC.ReMuX.LPCM.1.0.JPA-HunsuB-NaCL',
    'A tigriskirálynő 720p',
    'Egszakadas.2007.AMZN.WEBRIP.x264.HUN-nubira',
    'Teleszkóp',
    'Teleszkóp 1080i',
    'White.Girl.2016.iNTERNAL.BDRip.x264-LiBRARiANS',
    'Walking.With.The.Enemy.2013.DVDRip.x264-FRAGMENT',
    'Az ősz szele',
    'Bullet.Head.2017.720p.BluRay.x264-PSYCHD',
    'Bullet.Head.2017.1080p.BluRay.x264-PSYCHD',
    'Blade.Runner.2049.2017.BD25.AVC.x264.DTS-HD.MA.HUN-Mont',
    'Matrix.1999.Open.Matte.WEBRIP.x264.HUN-nubira',
    'The.Killing.Of.A.Sacred.Deer.2017.LIMITED.720p.BluRay.x264-SAPHiRE',
    'The.Killing.Of.A.Sacred.Deer.2017.LIMITED.BDRip.x264-SAPHiRE',
    'A.Bittersweet.Life.2005.720p.Hun-Craving',
    'Last.Flag.Flying.2017.720p.BluRay.x264-DRONES',
    'Last.Flag.Flying.2017.BDRip.x264-DRONES',
    'Ket.nap.a.volgyben.1996.HDTV.x264.HUN-nubira',
    'Atnevelo.tabor.2008.WEBRIP.x264.HUN-nubira',
    'The.Killing.Of.A.Sacred.Deer.2017.LIMITED.1080p.BluRay.x264-SAPHiRE',
    'Inception.2010.2160p.UHD.BluRay.Remux.HDR.HEVC.DTS-HD.MA.5.1-GS88',
    'A.hulladekgyujtoben.1965.HUN.CZE.CUSTOM.1080p.BluRay.x264-PLAN9',
    'Ex.Machina.2014.UHD.BluRay.2160p.DTS.HEVC.REMUX.HUN-ClunkyChip',
    'Blade.Runner.2049.2017.1080p.3D.BluRay.Half.OU.x264.DTS-HD.MA.7.1.Hun-HINA',
    'Fletch.1985.BDRip.x264.HUN-gyontato',
    'Split.2016.REMUX..2160p.UHD.Blu-ray.DTS-HD.MA.5.1.HEVC.HuN-Western',
    'Hűségteszt',
    'Wolf.Warrior.2.2017.LIMITED.1080p.BluRay.x264-USURY',
    'Kaabil.2017.BluRay.720p.x264.AC3.HunSub-vTk',
    'Wolf.Warrior.2.2017.LIMITED.BDRip.x264-BiPOLAR',
    'Az őslakó 720p',
    '8MM.1999.720p.BluRay.FLAC2.0.x264.HuN-Nimphas',
    'Amerikai.szepseg.1999.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira',
    'Harry.Potter.es.a.Halal.ereklyei.II.resz.2011.Open.Matte.WEBRIP.x264.HUN-nubira',
    'Léon.1994.International.Cut.UHD.BluRay.2160p.TrueHD.Atmos.7.1.HEVC.REMUX-FraMeSToR',
    'Így neveld a sárkányodat 720p',
    'Blade.Runner.2049.2017.1080p.3D.BluRay.Half-SBS.DTS.x264.HuN-No1',
    'Túl jó nő a csajom BD50',
    'The Flight of the Eagle 720p',
    'Blade.Runner.2049.2017.720p.BluRay.DTS.x264.HuN-No1',
    'Harry.Potter.es.a.felver.herceg.2009.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira',
    'The Man from Earth - Holocene 1080p',
    'Geostorm.2017.720p.BluRay.x264-GECKOS',
    'Jigsaw.2017.720p.BluRay.x264-GECKOS',
    'Jigsaw.2017.1080p.BluRay.x264-GECKOS',
    'Rogue.2007.720p.Hun-Craving',
    'Harry.Potter.es.a.Fonix.rendje.2007.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira',
    'Geostorm.2017.1080p.BluRay.x264-GECKOS',
    'Halálos tavasz',
    'Jigsaw.2017.BDRip.x264-GECKOS',
    'Harry.Potter.es.a.tuz.serlege.2005.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira',
    'Geostorm.2017.BDRip.x264-GECKOS',
    'Back.to.the.Future.1985.1080p.BluRay.DTS.x264-DON',
    'Back.to.the.Future.Part.II.1989.REPACK.1080p.HDTV.DTS.x264-DON',
    'Interstellar.2014.2160p.UHD.BluRay.Remux.HDR.HEVC.DTS-HD.MA.5.1-GS88',
    'Back.to.the.Future.Part.III.1990.1080p.BluRay.DTS.x264-DON',
    'Egy kupac kufli',
    'Harry.Potter.es.a.titkok.kamraja.2002.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira',
    'It.2017.UHD.BluRay.2160p.HEVC.REMUX.HUN-ClunkyChip',
    'Rosita 720p',
    'Blade.Runner.2049.2017.REMUX.2160p.UHD.Blu-ray.TrueHD.7.1.HEVC.HuN-HyperX',
    '8MM.1999.1080p.BluRay.Remux.AVC.DTS-HD.MA.2.0.HuN-Nimphas',
    'Blade.Runner.2049.2017.BDRiP.x264.HuN-HyperX',
    'Blade.Runner.2049.2017.1080p.BluRay.DTS.x264.HuN-HyperX',
    'Blade.Runner.2049.2017.REMUX.1080p.Blu-ray.DTS-HD.MA.5.1.AVC.HuN-HyperX',
    '8MM.1999.BDRip.x264.HuN-Nimphas',
    'Sid.and.Nancy.1986.1080p.BluRay.x264.AAC.5.1-GEO',
    'Shogun.Assassin.1980.HUN.BDRiP.x264-Gianni',
    'Ex.Machina.2014.UHD.BluRay.2160p.DTS-X.7.1.HEVC.REMUX-FraMeSToR',
    'Adok-kapok',
    'Kicsiny karácsonyi kaland',
    'The.Dark.Knight.Rises.2012.UHD.BluRay.2160p.DTS-HD.MA.5.1.HEVC.REMUX-FraMeSToR',
    'The.LEGO.Ninjago.Movie.2017.CUSTOM.1080p.BluRay.x264.HuN-HyperX',
    'The.LEGO.Ninjago.Movie.2017.CUSTOM.720p.BluRay.x264.HuN-HyperX',
    'Lorenzo.olaja.1992.HUN.ENG.CUSTOM.720p.WEB-DL.x264-PLAN9',
    'Lány a hídon',
    'A belső oldal 720p',
    "Dredd.2012.1080p.BluRay.REMUX.AVC.DTS-HD.MA.7.1.HuN-BecK's",
    'Salyut-7.2017.BluRay.1080p.DTS-HD.MA5.1.x264-CHD',
    'Szaguldo.erod.1995.BDRip.x264.HUN-nubira',
    'Tornado.New.Yorkban.2008.WEBRIP.x264.HUN-nubira',
    'Gázláng',
    'Börtönrock',
    'Harry.Potter.es.a.bolcsek.kove.2001.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira',
    'Irreversible.2002.1080p.BluRay.DD5.1.x264.HUN-GS88',
    'Veri az ördög a feleségét 720p',
    'The.Santa.Clause.2.2002.1080p.BluRay.REMUX.DTS-HD.AVC.HuN-TRiNiTY',
    'The.Santa.Clause.1994.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'The.Santa.Clause.1994.1080p.BluRay.REMUX.DTS-HD.AVC.HuN-TRiNiTY',
    'Rocky.V.1990.BDRip.x264.HUN-gyontato',
    'Portyán',
    'A báránysültek hallgatnak',
    'Farkaskirálynő 720p',
    'Bombázók a seregnek',
    'The.Man.Who.Knew.Infinity.2015.RETAIL.HUN.PAL.DVDR-BHO',
    'Port Arthur',
    'Az.uj.diri.1987.HUN.720p.WEB-DL.x264-TOXI',
    'Ripacsok',
    'One.Magic.Christmas.1985.Hun.DVDRip.x264-Russell',
    'Dögkeselyű',
    'Csak semmi pánik',
    'A szeleburdi család',
    'Szürke senkik 1080i',
    'Tarzan, a majomember',
    'Patkányok háborúja',
    'Popeye',
    'Halál a Níluson',
    'The Last Broadcast',
    'Barbie.Csillagok.kozott.2016.1080p.BluRay.ReMuX.AvC.Ac3.5.1.HuN-BaKeR',
    'Barbie.Star.Light.Adventure.2016.HUN.PAL.DVDR-BHO',
    'Szürke senkik',
    'Killshot.2008.HUN.1080p.BluRay.DTS.x264-ARROW',
    'Christmas.Vacation.1989.720p.REMASTERED.BluRay.FLAC2.0.x264.HuN-TRiNiTY',
    'Christmas.Vacation.1989.1080p.REMASTERED.BluRay.FLAC2.0.x264.HuN-TRiNiTY',
    'Home.Alone.1990.720p.REMASTERED.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Home.Alone.1990.1080p.REMASTERED.BluRay.DTS.x264.HuN-TRiNiTY',
    'Home.Alone.1990.1080p.REMUX.BluRay.DTS-HD.AVC.HuN-TRiNiTY',
    'Deck.the.Halls.2006.RETAiL.720p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Deck.the.Halls.2006.RETAiL.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Jingle.All.the.Way.1996.720p.RETAiL.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Jingle.All.the.Way.1996.1080p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY',
    'Penelope.2006.Hun.720p.BluRay.x264-Joe',
    'Démonok között 2. BD50',
    'Egy tiszta nő',
    'Vigyázó szemek',
    'Egy mukkot se!',
    'Polisse.2011.HunSub.DVDRip.x264-Russell',
    'Train.to.Busan.2016.KOREAN.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1-FGT',
    'Szerelem az éjszakában',
    'Train.to.Busan.2016.KOREAN.1080p.BluRay.x264.DTS-FGT',
    'Végtelen szerelem',
    'Knight.Moves.1992.Retail.HUN.PAL.DVD9-GS88',
    'Jövőre veled ugyanitt',
    'In.a.Valley.of.Violence.2016.LIMITED.BDRip.x264-DRONES',
    'Lady Chatterley szeretője',
    'Race.2016.RETAiL.HUN.PAL.DVDR-BHO',
    'Mindhalálig zene',
    'Denial.2016.BDRip.x264-GECKOS',
    'Buddy Holly története',
    'Café Lumiere',
    'Kuroneko.1968.iNTERNAL.BDRip.x264-MARS',
    'Severed.2005.DVDRip.x264.HuN-BAYLEE',
    'Bot.Beno.2015.HUN.DVDRiP-UBIKA',
    'Boszi.seprunyelen.2012.HUN.DVDRiP-UBIKA',
    'A.Graffalokolyok.2011.HUN.DVDRiP-UBIKA',
    'Barbie.Star.Light.Adventure.2016.HUN.720p.BluRay.DD5.1.x264-ARROW',
    'Barbie.Star.Light.Adventure.2016.HUN.1080p.BluRay.DTS.x264-ARROW',
    'Barbie.Csillagok.kozott.BDRip.x264.HuN-BaKeR',
    'Race.2016.HUN.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1-ARROW',
    'Race.2016.RETAiL.HUN.PAL.DVD9-VIKFORAK',
    'Race.2016.HUN.1080p.BluRay.DTS.x264-ARROW',
    'Race.2016.HUN.720p.BluRay.DD5.1.x264-ARROW',
    'A tűz martaléka',
    'Átlagemberek',
    'Spies.Like.Us.1985.VC1.BDRemux.DTSHD.2.0.HUN-USA',
    "The.Magnificent.Seven.2016.1080p.BluRay.REMUX.AVC.DTS-HD.MA.7.1.HuN-BecK's",
    'Arthur',
    'A Shaolin 36 próbatétele',
    'Sztracsatella.1996.Retail.HUN.PAL.DVD-GS88',
    'Troll.2.1990.HUN.720p.Bluray.x264-TOXI',
    'Amazing.Grace.2006.HUN.PAL.DVDR-Fibonacci',
    'Afganisztáni víg napjaim',
    'Our.Kind.of.Traitor.2016.RETAiL.HUN.PAL.DVDR-BHO',
    'Elite.Squad.2.2010.1080p.Blu-ray.REMUX.AVC.DTS-HD.MA.5.1.RoSubbed-playBD',
    'A bádogdob',
    '25 millió fontos váltságdíj',
    'The.Magnificent.Seven.2016.HUN.BDRiP.x264-ARROW',
    'The.Magnificent.Seven.2016.720p.BluRay.DD5.1.x264.HuN-FL0W3R',
    'The.Magnificent.Seven.2016.1080p.BluRay.DD5.1.x264.HuN-FL0W3R',
    'Die.Unfassbaren.2.German.2016.AC3.BDRiP.x264-XF',
    'Nous.York.2012.Retail.Hun.DVDRip.x264-Russell',
    'Other.People.2016.LIMITED.DVDRip.x264-BiPOLAR',
    'Our.Kind.of.Traitor.2016.HUN.1080p.Blu-ray.REMUX.AVC.DTS-HD.MA.5.1-ARROW',
    'Our.Kind.Of.Traitor.2016.HUN.1080.BluRay.DD5.1.x264-ARROW',
    'Our.Kind.of.Traitor.2016.HUN.720p.BluRay.DD5.1.x264-ARROW',
    'Our.Kind.of.Traitor.2016.HUN.BDRiP.x264-ARROW',
    'Our.Kind.of.Traitor.2016.RETAiL.HUN.PAL.DVD9-VIKFORAK',
    'Elő robotok',
    'The.Secret.Life.of.Pets.2016.RETAiL.HUN.PAL.DVD9-HyperX',
    'War.Dogs.2016.HUN.PAL.DVDR-Georgio',
    'A.szex.szorny.1999.HUN.1080p.WEB-DL.x264-TOXI',
    'A Pentatonix Christmas Special 720p',
    'War.Dogs.2016.RETAIL.HUN.PAL.DVD9-DeVeDe9',
    'Holtodiglan',
    'A Pentatonix Christmas Special',
    'A világ kincsei - A természet kincsei',
    'Pardaillan lovag 720p',
    'Le.gendarme.et.les.gendarmettes.1982.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi',
    'San.Andreas.2015.RETAIL.HUN.PAL.DVD9-HRT',
    'Le.gendarme.et.les extra-terrestres.1979.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi',
    'Le.gendarme.en.balade.1970.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi',
    '1944.2015.720p.BluRay.DD5.1.x264-VietHD',
    'Le.gendarme.se.marie.1968.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi',
    'Planet.of.the.Apes.2001.HUN.BDRiP.x264-ARROW',
    'Sorvadj.el.1996.HUN.720p.BluRay.x264-TOXI',
    'A vörös ár - A vörösizsap katasztrófa 720p',
    'Air.2015.ReTaiL.PAL.DVD.Hungarian-JBR',
    'A Valentin napi mészárlás 1080p',
    'Dope.2015.BDRip.x264-GECKOS',
    'Traumschiff.Surprise.Persiode.1.2004.BDRemux.AVC.DTS-ES.6.1.Hun-boOk',
    'Spy.2015.RETAiL.2in1.HUN.PAL.DVD9-HyperX',
    'Air.2015.1080p.Bluray.Remux.AVC.DTS-HD.MA.5.1.HUN-KuNgZi',
    'Spy.2015.1080p.Extended.Cut.Bluray.Remux.AVC.DTS-HD.MA.7.1.HUN-KuNgZi',
    'Air.2015.BDRip.x264.HuN-HRT',
    'Air.2015.720p.BluRay.DD5.1.x264.HuN-HyperX',
    'Air.2015.1080p.BluRay.DTS.x264.HuN-HyperX',
    'Tűzgyűrű 3D 1080p REMUX',
    'Spy.2015.Extended.Cut.BDRip.x264.HuN-HRT',
    'Le.gendarme.a.New.York.1965.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi',
    'Spy.2015.Extended.Cut.720p.BluRay.DD5.1.x264.HuN-HRT',
    'Spy.2015.Extended.Cut.1080p.BluRay.DTS.x264.HuN-HRT',
    'Le.gendarme.de.Saint-Tropez.1964.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi',
    'The.Vatican.Tapes.2015.LIMITED.RERiP.BDRip.x264-ALLiANCE',
    'The.Vatican.Tapes.2015.LIMITED.RERiP.720p.BluRay.x264-ALLiANCE',
    'The.D.Train.2015.BDRip.x264.HuN-HRT',
    'The.D.Train.2015.720p.BluRay.DD5.1.x264.HuN-HRT',
    'The.D.Train.2015.1080p.BluRay.DTS.x264.HuN-HRT',
    'Latin.Lover.2015.1080p.BluRay.DTS.x264.HuN-SaS',
    'Compulsion.2013.CUSTOM.BDRip.x264.HUN-SLN',
    'Marshland.2014.FESTiVAL.DVDRiP.X264-TASTE',
    'San.Andreas.2015.3D.BD25.MVC.DTS-HD.7.1.Hun-BekőTojni',
    '36th.Precinct.2004.BDRip.x264.HUN-CRW',
    'Operation.Petticoat.1959.1080p.BluRay.x264.Hun-GS88',
    'The.Wings.of.the.Dove.1997.DVDRip.x264.HUN-CRW',
    'A felhők fölött 3 méterrel 1080p',
    'Dont.Be.Afraid.of.the Dark.2010.BDRip.x264.HUN-CRW',
    'Set.It.Off.1996.DVDRip.x264.HUN-CRW',
    'Hamupipoke.2.Az.almok.valora.valnak.2002.BDRip.x264.HuN-BaKeR',
    'Home.Alone.1990.REMASTERED.720p.BluRay.X264-AMIABLE',
    'Z.For.Zachariah.2015.LIMITED.1080p.BluRay.DTS.x264.HUNSUB-SaS',
    'Othello, a velencei mór tragédiája',
    'Bolond mozi mozibolondoknak',
    'Z.For.Zachariah.2015.LIMITED.BDRip.x264-iNFAMOUS',
    'Paper.Towns.2015.BDRip.x264-ALLiANCE',
    'Z.For.Zachariah.2015.LIMITED.720p.BluRay.x264-iNFAMOUS',
    'Captain.Sabertooth.and.the.Lama.Rama.Treasure.2014.ReTaiL.PAL.DVD.Hungarian-JBR',
    'Spy.Susan.Cooper.Undercover.EXTENDED.German.2015.AC3.BDRiP.x264-EXQUiSiTE',
    'Kind.44.German.2015.AC3.BDRiP.x264-EXQUiSiTE',
    'Descendants.Die.Nachkommen.German.2015.AC3.DVDRiP.x264-XF',
    'Kánikulai délután BD50',
    'An.Honest.Liar.2014.1080p.WEB-DL.x264.AC3-NiKON',
    'Turbo.Kid.2015.1080p.BluRay.DTS.X264-AMIABLE',
    'Turbo.Kid.2015.LIMITED.BDRip.X264-AMIABLE',
    'Operator.2015.BDRip.x264-RUSTED',
    'Turbo.Kid.2015.LIMITED.720p.BluRay.X264-AMIABLE',
    'My.Own.Private.Idaho.1991.720p.BluRay.DD5.1.x264.HuN-LiLBOX',
    'Traumschiff.Surprise.Persiode.1.2004.REPACK.BDRip.x264.Hun-boOk',
    'Seabiscuit.2003.720p.BluRay.DTS.x264.HuN-SaS',
    'June.2015.WEB-DL.x264-RARBG',
    'Avengers.Age.of.Ultron.2015.Custom.3D.BD25.DTS-HD.7.1.Hun-BekőTojni',
    'Ray.2004.EXTENDED.DVDRiP.AC3.x264-LEGi0N',
    'Monsters.Dark.Continent.2014.RETAiL.HUN.PAL.DVDR-Georgio',
    'Danny.Collins.2015.ReTaiL.PAL.DVD.Hungarian-JBR',
    'Hamupipoke.3.Elvarazsolt.mult.2007.HUN.BDRiP.x264-ARROW',
    'A.teremto.gondolat.2013.DVBRip.x264.AC3.Hun-MrX',
    'Monsters.Dark.Continent.2014.1080p.BluRay.DTS.x264.HuN-DIABLO',
    'Monsters.Dark.Continent.2014.720p.BluRay.DD5.1.x264.HuN-DIABLO',
    'Az első élet D02',
    'Mademoiselle.Chambon.2009.1080p.BluRay.DD5.1.x264.HuN-LiLBOX',
    'Deathgasm.2015.WEB-DL.x264-RARBG',
    'Monsters.Dark.Continent.2014.BDRip.x264.Hun-DIABLO',
    'Tracers.2014.ReTaiL.PAL.DVD.Hungarian-JBR',
    'The.Long.Voyage.Home.1940.Custom.PAL.DVD.Hun-Garfield',
    'Barely.Lethal.2015.ReTaiL.PAL.DVD.Hungarian-JBR',
    'A hetedik fiú',
    'Az első élet D01',
    'The.Amazing.Captain.Nemo.1978.DVDRip.XviD.HUN-Baggio1',
    'Komodo.urai.2008.DVBRip.x264.AC3.Hun-MrX',
    'A.domino.elv.1977.1080p.BluRay.x264.DTS.HuN.EnG-Jak68',
    'Dino.kaland.2012.BDRip.x264.HuN-BaKeR',
    'Dzsihad.Amerikaban.2012.DVBRip.x264.AC3.Hun-MrX',
    'A.kisbabak.titkos.elete.2014.DVBRip.x264.AC3.Hun-MrX',
    'The.Lion.King.1994.1080p.Bluray.Remux.AVC.DTS-HD.MA.HUN.7.1-SLM1',
    'Extinction.2015.1080p.WEB-DL.DD5.1.H264.HUN-KuNgZi',
    'Barely.Lethal.2015.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-SaS',
    'Road.Trip.2000.Unrated.BDRemux.AVC.DTS-HD.MA5.1.Hun-boOk',
    'Torrente.5.2014.HUN.PAL.DVDR-Netman',
    'San.Andreas.2015.BD25.Retail.AVC.x264.TrueHD.7.1.HUN-Mont',
    'Insidious.Chapter.3.2015.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-SaS',
    'Ace.Ventura.When.Nature.Calls.1995.1080p.BluRay.DTS.x264.HuN-HRT',
    'Ace.Ventura.Pet.Detective.1994.1080p.BluRay.DTS.x264.HuN-HRT',
    'Insidious.Chapter.3.2015.BDRip.x264.HuN-HRT',
    'Insidious.Chapter.3.2015.720p.BluRay.DD5.1.x264.HuN-HRT',
    'Insidious.Chapter.3.2015.1080p.BluRay.DTS.x264.HuN-HyperX',
    'Folytassa, Jack 1080p',
    'The.Other.Woman.2014.720p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'The.Other.Woman.2014.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Sugarlandi hajtóvadászat 720p',
    'Robocroc.2013.CUSTOM.DVDRip.XviD.Hun-SLN',
    'Mandragóra',
    'Inception.2010.1080p.REMUX.AVC.BluRay.DTS-HD.MA.5.1.HUN-C4',
    'Turkisch.fur.Anfanger.2012.CUSTOM.DVDRip.XviD.Hun-SLN',
    'A.Midsummer.Nights.Dream.1999.720p.WEB-DL.DD5.1.H.264.HuN-LiLBOX',
    'A 13-as rendőrőrs ostroma 1080p',
    'The.Hooligan.Factory.2014.BDRip.XviD.HuN-No1',
    'Mi a franc van',
    'The.Hot.Chick.2002.1080p.WEB-DL.DD5.1.H.264.HuN-LiLBOX',
    'The.Hooligan.Factory.2014.BDRip.x264.HuN-No1',
    'Rám se ránts',
    'Jackie.a.Jofiu.DVDRip.HUN.XviD-djzsolt',
    'The.Last.Exorcism.2010.HUN.DVDRip.Xvid-akela',
    'Varj.mig.sotet.lesz.1976.Hun.DVDRip.XVID-Buksza',
    'The.Mechanic.2011.DVDRip.XviD.AC3-Rx',
    'The.Little.Prince.1974.CUSTOM.HUN.DVDRip.XviD-uzoli',
    'The.City.of.Lost.Children.1995.HUN.DVDRip.XviD-HSF',
    'Ran.1985.HUN.DVDRiP.Xvid-Thick',
    'Lady.Chatterley.2006.HUN.DVDRiP.XviD-CORN',
    'House.Calls.1978.HUN.DVDRiP.Xvid-Thick',
    'A.Pacak.1979.Custom.26.Evfordulos.kiadas.DVDRip.XviD.Hungarian-JustOne',
    'Sammys.Adventures.The.Secret.Passage.3D.READ.NFO.2010.HUN.DVDRip.XviD-Gonosz',
    'The.House.of.the.Devil.2009.LIMITED.BDRip.XviD-ESPiSE',
    'National.Geographic.Earth.Making.of.a.Planet.2010.PDTV.XviD.Hungarian-TvTiME',
    'AMERIKAI.KIBORG.1993.HUN.DVDRip.XVID-Buksza',
    'Adam.And.Eve.2005.DVDRip.Xvid.Hun-Source',
    'Rosszfiuk.2000.READ.NFO.HUN.DVDRip.XviD-Gonosz',
    'Louis.C.K.Chewed.Up.2008.DVDRip.XviD-VH-PROD',
    'Keselyuk.karmaiban.1964.HUN.READNFO.720p.Bluray.x264-TOXI',
    'Bolondok felvonulása',
    'Divergent.2014.1080p.BluRay.Remux.AVC.DTS-HD.MA.7.1.HuN-HRT',
    'Belle.2013.BDRip.x264-GECKOS',
    'Csótányinvázió',
    'Divergent.2014.1080p.Bluray.DTS.x264.HuN-TRiNiTY',
    'Need.for.Speed.2014.CUSTOM.BD25.AVC.x264.HUN.DTS-HD.MA-Mont',
    'Divergent.2014.720p.Bluray.DD5.1.x264.HuN-TRiNiTY',
    'Alfa Rómeó és Júlia',
    'Ha Versailles mesélni tudna',
    'Divergent.2014.PAL.DVDR.Hungarian-nCORE',
    'Idegen a világűrből',
    'Divergent.2014.BDRip.x264.HUN-ZHR',
    'Of.Gods.and.Men.2010.HUN.PAL.DVDR-MWT',
    'Yogaworks.Body.Slim.2009.DVDRiP.x264-AERODELUXE',
    'Divergent.2014.BDRip.XviD.HUN-ZHR',
    'Absurd',
    'Eletem.ertelme.1998.Custom.Hun.Pal.DVDRip.Xvid-Buksza',
    'Sabotage.2014.1080p.REMUX.AVC.BluRay.DTS-HD.MA.5.1.HUN-C4',
    'Zoldkartya.1990.HUN.PAL.DVDR-T4T',
    'Sabotage.2014.PROPER.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Sabotage.2014.PROPER.BDRip.XviD.HuN-No1',
    'Need.For.Speed.2014.1080p.3D.BluRay.AVC.DTS-HD.MA.7.1-TreZzoR',
    'Sabotage.2014.PROPER.720p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Bottle.Rocket.1996.BluRay.720p.DTS.x264-CHD',
    'My.Little.Princess.2011.CUSTOM.DVDRiP.HUN.XViD-TiGeR',
    'McBride - Rekviem',
    'Ilyen a formám 1080p',
    'Szabotázs',
    'Nagyítás 720p',
    'Evangelion - 2.0 You Can (Not) Advance 1080p',
    'Evangelion 1.0 (Nem) vagy egyedül 1080p',
    'A vörös fogadó',
    'Marebito',
    'Éjféli leszámolás',
    'A harcos éjszakája',
    'Face.Off.1997.HUN.BDRip.XviD-HDEvo',
    'Premonition.2007.BDRip.XviD.HuN-DreamSite',
    'Az ördög és a tízparancsolat 720p',
    'The.Deal.2008.DVDRip.XviD.Hungarian-vigyoree',
    'A.selyem.sikolya.1996.HUN.FRE.CUSTOM.DVDRip.XviD-PLAN9',
    'The.Blind.Side.2009.BDRiP.XviD.HuN-ASSASSiN',
    'Mocskos.Zsaru-New.Orleans.Utcain.2009.BDRip.XviD.Hun-btr9',
    'Brothers.2009.BDRip.XviD-HQ-HUN',
    'Bachelor.Party.2.The.Last.Temptation.2008.UNRATED.DVDRiP.HUN.XViD-TiGeR',
    'Rokonok.2006.HUN.PAL.DVDR-NON',
    'Paul.Blart.Mall.Cop.BDRiP.XviD.Hun-Kukac1',
    'Kickboxer.1989.HUN.BDRip.Xvid-Hurricane',
    'A főnök felesége 1080p',
    'A sárga kutya barlangja',
    'Starred.Up.2013.1080p.BluRay.X264-AMIABLE',
    'Rio.2.2014.1080p.3D.BluRay.CEE.AVC.DTS-HD.MA.7.1-TreZzoR',
    'Tesseract.2003.DVDRip.Xvid.HUN-BaKeR',
    'Mr.Peabody.and.Sherman.2014.1080p.REMUX.AVC.BluRay.DTS-HD.MA.5.1.HUN-C4',
    'Starred.Up.2013.720p.BluRay.X264-AMIABLE',
    'A szcientológia ügynökei',
    'Starred.Up.2013.BDRip.X264-AMIABLE',
    'Bartek.a.varazslatos.1999.DVDRip.XviD.HUN-BaKeR',
    'A szcientológia ügynökei 1080i',
    'Düh és dicsőség 2',
    'My.Moms.New.Boyfriend.2008.720p.BluRay.DTS.x264.HuN-LiLBOX',
    'Mr.Peabody.And.Sherman.2014.1080p.BluRay.DTS-ES.x264.HuN-HRT',
    'Mr.Peabody.and.Sherman.2014.PAL.DVDR.Hungarian-nCORE',
    'Mr.Peabody.And.Sherman.2014.BDRip.x264.HUN-ZHR',
    'Mr.Peabody.And.Sherman.2014.720p.BluRay.DD5.1.x264.HuN-HRT',
    'Mr.Peabody.And.Sherman.2014.BDRip.XviD.HUN-ZHR',
    'Az olajfák alatt',
    'New World 1080p',
    'Címe ismeretlen',
    'Harry Potter és a bölcsek köve',
    'Star.Trek.Into.Darkness.2013.BDRip.x264.HuN-ZHR',
    'Egy jenki Artúr király udvarában',
    'Star.Trek.Into.Darkness.2013.1080p.3D.BluRay.Half-OU.DD5.1.x264.HuN-LiLBOX',
    'Star.Trek.Into.Darkness.2013.BDRip.x264.HuN-No1',
    'Star.Trek.Into.Darkness.2013.720p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Star.Trek.Into.Darkness.2013.1080p.BluRay.DD5.1.x264.HuN-TRiNiTY',
    'Star.Trek.Into.Darkness.2013.BDRiP.XviD.HuN-PpB',
    'Airplane.II.The.Sequel.1982.720p.HDTV.HuN.EnG.x264-TRiNiTY',
    'Valkyrie.2008.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY',
    'Wing.Commander.1999.BluRay.Remux.1080p.AVC.DTS-HD.MA.5.1.Hun-KRM',
    'Airplane.2.The.Sequel.1982.HDTV.1080i.x264.hun-Bak',
    'Lenyűgöző korallzátony - Rejtélyes vízalatti világok 1080p',
    'Passenger.57.1992.BDrip.Custom.HUN.x264-DenZo',
    'The.Company.Men.2010.Custom.Pal.DVDR.Hun-Ronnie',
    'Kis Nemo Álomországban 720p',
    'Lenyűgöző korallzátony 3D 1080p',
    'Szaguldo.bosszu.1986.3xHUN.720p.BluRay.x264-TOXI',
    'A.Barbar-Legenda.A.Szellemharcosrol(bovitett valtozat)Hun.PAL.DVDR-Gazdi',
    'A.svindler.1961.HUN.ENG.CUSTOM.720p.BluRay.x264-PLAN9',
    'High.Plains.Drifter.1973.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY',
    'Lenyűgöző korallzátony - Rejtélyes vízalatti világok 3D BD25',
    'Columbus.Circle.2012.720p.BluRay.DD5.1.x264.HUN-R4Z3R',
    'JFK.1991.DirCut.720p.HUN.READNFO.BluRay.x264-TOXI',
    'I.Spit.On.Your.Grave.1978.720p.BluRay.x264-TiTANS',
    'Rise.Of.The.Footsoldier.2007.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    '3096.Days.2013.DVDRiP.XViD-SML',
    'Class.Action.1991.DVDRiP.XviD.HuN-HDNeT',
    'Lenyűgöző korallzátony 1080p',
    'Zambezia.2012.RETAiL.HUN.PAL.DVD9-HRT-1st',
    'Személyes ügy',
    'A máltai sólyom',
    'Fűrész',
    'V.For.Vendetta.2005.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY',
    'Bloodlines.HUN.TVRip.XviD-DART',
    'Péntek 13',
    'I.Spit.on.Your.Grave.2010.ReaD.NFO.CuSToM.uNRaTeD.BDRiP.XviD.HuN-BAttila85',
    'The.Nutcracker.In.3D.2010.BDRiP.x264.HuN-BAttila85',
    'Jesus.liebt.mich.German.BDRip.x264-CONTRiBUTiON',
    'The.Jungle.Book.1967.1080p.BluRay.DTS.x264.HuN-BAttila85',
    'Death.Sentence.2007.720p.BluRay.DTS.x264.HuN-OCB',
    'Haboru.a.Foldon.2000.HUN.READNFO.720p.BluRay.x264-TOXI',
    'Cheerful.Weather.for.the.Wedding.2012.BDRip.XviD.Hun-BHO',
    'Szökevényvonat 720p',
    'The.Company.Men.2010.BDRip.x264.HuN-No1',
    'The.Company.Men.2010.720p.BluRay.DTS.x264.HuN-No1',
    'Titanic.1997.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY',
    'The.Nutcracker.In.3D.2010.ReaD.NFO.BDRiP.XviD.HuN-BAttila85',
    'I.Spit.on.Your.Grave.2.UNRATED.BDRip.XviD.AC3-WAR',
    'Ace.Ventura.When.Nature.Calls.1995.BDRip.x264.HuN-No1',
    'The.Jungle.Book.2.2003.1080p.BluRay.DTS.x264.HuN-BAttila85',
    'The Kings of Summer 2013 BDrip XviD AC3 MiLLENiUM',
    'Forgoszel.1946.HUN.ENG.CUSTOM.720p.BluRay.x264-PLAN9',
    'A.dzsungel.konyve.2.2003.HUN.BDRiP.XviD-ARROW',
    'Bűnvadászok BD25',
    'Tom.and.Jerrys.Giant.Adventure.2013.BDRip.x264.HuN-arpi170',
    'The.Fugitive.1993.HUN.BDRip.XviD-HDEvo',
    'Brian élete',
    'Minority.Report.2002.INTERNAL.DVDRip.XviD-FiNaLe',
    'Black.Gold.2011.CUSTOM.HUN.BDRip.XviD-HDEvo',
    'Otthon az úton',
    'What.the.Day.Owes.the.Night.2012.CUSTOM.BDRip.x264.HuN-ZHR',
    'Polytechnique',
    'Az új szerelem',
    'The.Italian.Job.2003.720p.Bluray.DD5.1.x264.HuN-TRiNiTY',
    'A vonal másik végén',
    'LaMB.2009.WEB-DL.x264.HUN-Teko',
    'The.Italian.Job.2003.1080p.Bluray.DTS.x264.HuN-TRiNiTY',
    'Clash.of.the.Titans.2010.BDRiP.x264.HuN-BAttila85',
    'Farscape.The.Peacekeeper.Wars.2004.720p.BluRay.x264-BRMP',
    'The.Debt.2010.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY',
    'Blue.Like.Jazz.2012.CUSTOM.BDRip.XviD.Hungarian-HuSync',
    'Tom.and.Jerrys.Giant.Adventure.2013.1080p.BluRay.REMUX.DTS-HD.MA.5.1.AVC.Hun-arpi170',
    'Maximum.Conviction.2012.REPACK.Custom.Pal.DVDR.Hun-Ronnie',
    'The.Iceman.2012.DVDRip.XviD-iGNiTiON',
    'The.Great.Gatsby.2013.CUSTOM.HUN.PAL.DVDR-MWT',
    'A.megbocsajtas.utja.2007.CUSTOM.DVDRip.XviD.HUN.HRD',
    'Edison.2005.DVDRip.XviD.HUN-AMR',
    'The.Fugitive.1993.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY',
    'Naked.Gun.33.1.3.The.Final.Insult.1994.720p.BluRay.x264.DD5.1.DUBBED.HuN-Girnyo',
    'Dinocroc.vs.Supergator.2010.CUSTOM.BDRip.XviD.Hun-SLN',
    'Wither.2012.720p.BluRay.DTS.HunSub.x264-HORRORFREAK',
    'World.War.Z.2013.UNRATED.DVDRip.XviD-PTpOWeR',
    'A kis hableány - A kezdet kezdete 1080p',
    'Tom.and.Jerrys.Giant.Adventure.2013.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Tom.and.Jerrys.Giant.Adventure.2013.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Tom.and.Jerrys.Giant.Adventure.2013.HUN.DVDRip.Xvid-ZHR',
    'Versailles felemelkedése és bukása - XVI. Lajos 720p',
    'Watchmen 2009 1080p EUR Blu-ray AVC TrueHD 5.1-BLUEBIRD',
    'Runaway.Train.1985.BDrip.Custom.HUN.x264-DenZo',
    'Utolsó üzenet - özv. Horthy Istvánné manifesztuma a magyar nemzethez',
    'Tom.and.Jerrys.Giant.Adventure.2013.Retail.HUN.PAL.DVDR-B13',
    'Természetes világ - A jéghegy, amely elsüllyesztette a Titanicot',
    'Camille.2012.DVDRip.XviD.HUN-R4Z3R',
    'Katonazene 1080i',
    'Gesztenye, a honalapító 720p',
    'The.American.Friend.1977.CuSToM.HUN.DVDRip.Xvid-ZHR',
    'Casino.1995.PAL.2xHUNDUB-ATES26',
    'The.Marine.2.2009.CUSTOM.DVDRip.XviD.Hungarian-HuSync',
    'Batman.Mystery.of.the.Batwoman.2003.DVDRip.ENG.x264-easyNFO',
    'S.O.S. Szobafogság',
    'Batman.&.Mr.Freeze.SubZero.1998.DVDRip.ENG.x264-easyNFO',
    'Dr. Minorka Vidor nagy napja',
    'Az utolsó randevú',
    'Avanti!.1972.DVDRip.HUN.XviD-JFF',
    'Hot.Coffee.2011.CUSTOM.HDTV.XviD.Hungarian-HuSync',
    'Cant.Hardly.Wait.1998.CuSToM.HUN.DVDRip.Xvid-ZHR',
    'A Monty Python Amerikában',
    'Kölcsönlakás',
    'Infernal.Affairs.2002.HUN.BDRip.XviD-Penge71',
    'Csillagközi invázió',
    'Roman.Holiday.1953.CuSToM.HUN.DVDRip.Xvid-ZHR',
    'Thir13en.Ghosts.2001.Blu-Ray.1080p.MPEG-4.AVC.DTS.Hun.Remux-Triad',
    'Sergio Leone - Volt egyszer egy amerikai álom',
    'Thir13en.Ghosts.2001.Hun.BDRip.XviD-Triad',
    'Coma.1978.BluRay.720p.Hun.x264-DenZo',
    'Contraband.2012.Retail.DVDRiP.XviD.HuN-MWT',
    'Contraband.2012.HUN.PAL.DVDR-MWT',
    'Rejtélyek asszonya - Egy régi adósság',
    'Systema Spetsnaz - Knife in Close Combat',
    'Batman.Mask.of.the.Phantasm.1993.DVDRip.HUN.ENG.x264-easyNFO',
    'Systema - Fundamentals of Knife Disarming',
    'Systema Classic Series - New York Seminars',
    'Systema - Escape from Holds',
    'Systema - Improvised Weapons',
    'Tom.And.Jerry.The.Movie.1992.HUN.PAL.DVDR-Knight',
    'Barfuss.2005.DVDRip.XviD-lacihaver',
    'Super.8.2011.BDRip.x264.Hungarian-Gonosz',
    'Safe.House.2012.BDRip.x264.Hungarian-Gonosz',
    'Hegylako.DVDR.HunDub.Pal.1986-FoF',
    'Rossz nap Black Rocknál',
    'Az Angyal vérbosszúja',
    'Káprázat',
    'Elrabolt.elet.2009.HUN.DVDRip.XviD-DiViSiVE',
    'A tizedik áldozat',
    'Salmon.Fishing.In.The.Yemen.2011.BDRip.XviD-COCAIN',
    'Justice.League.Crisis.On.Two.Earths.2010.1080p.BluRay.HUN.ENG.x264.easyNFO',
    'James.Bond.Halalos.remuletben.HunDub.PAL.DVDR-Zso',
    'Fesd újra, Van Gogh!',
    'The.Quiet.Earth.1985.720p.BluRay.x264-SiNNERS',
    'Star.Wars.Episode.IV.A.New.Hope.1977.1080p.BluRay.DTS-ES.x264.Hun-rB',
    'Blitz.2011.DVDRiP.XviD.HuN-MWT',
    'Attack.Of.The.50.Feet.Woman.1993.iNT.CUSTOM.DVDRip.XviD.Hun-JM',
    'James.Bond.Halalvagta.HunDub.PAL.DVDR-Zso',
    'James.Bond.Halj.meg.maskor.HunDub.PAL.DVDR-Zso',
    'James.Bond.Holdkelte.HunDub.PAL.DVDR-Zso',
    'A.Dangerous.Method.2011.PROPER.DVDRip.XviD-EXViD',
    'Stromboli',
    'The.Last.King.of.Scotland.2006.BluRay.720p.DTS.x264.dxva-FLAWL3SS',
    'Wedding.Wars.2006.TVRip.XviD.Hun-SLN',
    'Lesz egyszer egy Ifipark',
    'Womb.2010.720p.BluRay.DTS.x264.Hungarian-HuSync',
    'American.Reunion.UNRATED.720p.BluRay.X264-BLOW',
    'Blitz.2011.Hun.PAL.DVDR-Gazdi',
    'Blitz.2011.BDRiP.XviD.HuN-MWT',
    'The.Sweet.Hereafter.1997.READ.NFO.720p.BluRay.HUN.ENG.x264-HaNTaH',
    'Basic.Instinct.2.2006.720p.BluRay.DD5.1.x264.HuN-Cafi',
    'Ransom.1996.HUN.PAL.DVDR-SaS',
    'Saw.3D.2010.Half-SBS.3D.1080p.Bluray.DTS.x264.HuN-TRiNiTY',
    'Doktor.Szoszi.2001.Blu-ray.1080p.x264.HUN.ENG-ZJT',
    'Németország nulla évben',
    'Ede.megeve.ebedem.DVDR.HunDub.Pal.2006-FoF',
    'Womb.2010.CUSTOM.DVDRip.XviD.Hungarian-HuSync',
    'Doktor.Szoszi.2001.Blu-ray.720p.x264.HUN.ENG-ZJT',
    'Too.Big.to.Fail.2011.DVDRiP.XviD.HuNSUB-MWT',
    'Police.Academy.1984.720p.BluRay.x264.FLAC.DUBBED.DUAL.HuN-Girnyo',
    'A.frigylada.2003.HUN.DVDRip.XviD-DiViSiVE',
    'Elore.2002.HUN.DVDRip.XviD-DiViSiVE',
    'Penz.all.a.hazhoz.1939.HUN.TVRip.x264-DReBiN',
    'Combat Aikido - Jason Delucia',
    'Weather.Wars.2011.CuSToM.DVDRip.XviD.Hun-SLN',
    'Navy Seal Team - Hand-To-Hand Combat Training Volume 1',
    'Clear.and.Present.Danger.1994.BDRip.XviD.HUN-ZHR',
    'The.Fourth.Kind.2009.720p.BluRay.DTS.x264.HuN-Cafi',
    'The.Color.of.Money.1986.BDRip.XviD.HuN-BAttila85',
    'Assault.on.Precinct.13.2005.Hun.BDRip.XviD-Triad',
    'A.Perfect.World.1993.BDRiP.XviD.HuN-MicroBit',
    'Anyahajó - Repülőtér a vízen',
    'Anyahajó - Irány a veszélyes övezet!',
    'Le.Marquis.2011.CUSTOM.DVDRip.XviD.Hungarian-HuSync',
    'The.Delta.Force.1986.BluRay.720p.2xHun.DTS.x264-DenZo',
    'From.Dusk.Till.Dawn.1996.720p.BluRay.DD5.1.x264.HuN-AMBiLiGHT',
    'House.of.Sand.and.Fog.2003.720p.HDTV.READ.NFO.ENG.x264.HuN-TRiNiTY',
    'Batman.Year.One.2011.1080p.Bluray.HUN.ENG.DTS.x264-easyNFO',
    'Batman.Under.the.Red.Hood.2010.1080p.BluRay.HUN.ENG.x264-easyNFO',
    'Csalók és csalik',
    'Mona Lisa',
    'Isten hozott a babaházban',
    'Superman.Batman.Public.Enemies.2009.1080p.BluRay.HUN.ENG.x264-easyNFO',
    'Tigris hazatér',
    'The.Delta.Force.1986.Custom.2xHUN.BDRip.Xvid-DenZo',
    'Another.Day.2001.TVRip.XviD.Hun-SLN',
    'Apollo 13',
    'Idovonal.2003.720p.BluRay.x264.HUN-FOX',
    'Unforgiven.1992.CUSTOM.BDRiP.XviD.HUN-muxuj',
    'Holly Hobbie és barátai - Igaz barátok mindörökké',
    'Paraziták',
    "Senso '45",
    'A muzsika hangja - Városmajori Szabadtéri Színpad előadása',
    'Raszputyin - Ördög az emberben',
    'Shop-show 720p',
    'Reservoir.Dogs.1992.Bluray.1080p.DUBBED.DTS-HR.6.1.HUN.dxva.x264-Girnyo',
    'The.Legend.of.1900.1998.BluRay.1080p.DTS.x264-CHD',
    'Egyszer volt - A berlini fal',
    'A békaherceg',
    'Az Őrzők legendája 3D 1080p',
    'Szerelem a Fehér Házban',
    'Trasgredire',
    'A nagy kiruccanás',
    'Egy negyvenes nő és a flört',
    'Ivanhoe',
    'Top.Gun.1986.BDRip.XviD.Hun-Predator',
    'G.I.Jane.1997.BDRip.Xvid.Hun-PpB',
    'Category.6.Day.Of.Destruction.2004.DVDRip.DUAL.AUDiO.HUN.XViD-SVCDTeaM',
    'The Door',
    'Hajléktalanul a Harvardon',
    'Nagy vörös kutya',
    'Bátyám, a főcserkészlány',
    'Mindenkit hazavárnak',
    'John Fitzgerald Kennedy',
    'Csók, anyu',
    'Jákob rabbi kalandjai BD25',
    'Wagner - Der Ring des Nibelungen',
    'Kickboxer 1080p',
    'Deja.Vu.2006.RETAiL.BDRiP.XViD.HuN-PpB',
    'Caligula - The Untold Story',
    'Az uralkodó harcosai',
    'Splice.2009.1080p.BluRay.DTS.x264.Hun-Sadu',
    'Splice.2009.720p.BluRay.DTS.x264.Hun-Sadu',
    'Despicable.Me.Home.Makeover.Mini.Movie.2010.720p.Bluray.x264-HDEX',
    'Pumpkinhead - A bosszú démona',
    'Hidegvérrel',
    'Halálos fegyver 3',
    'Gyilkos játékok',
    'Óvakodj a törpétől!',
    'Demolition.Man.1993.BD25.AVC.DTSHD.HUN-HDPre',
    'Kígyóharapás',
    'Lemmy',
    'A függetlenség napja 1080p',
    'Én és a hercegem 3. - Királyi mézeshetek',
    'The.Wind.That.Shakes.the.Barley.2006.720p.HDTV.H.264.DUAL-N&R',
    'Despicable Me 3 Mini-Movies 1080p',
    'Én és a gengszter',
    'Overboard.1987.720p.BluRay.x264.DTS.HUN-N&R',
    'Az aztékok kincse II. - A napisten piramisa',
    'Bolondos dallamok - Tapsi Hapsi gyűjteménye 2',
    'A gyermek',
    'Mesék a kriptából - Vérbordély',
    'Halálos fegyver 2',
    'Belle.de.Jour.1976.720p.BluRay.Hun-HDv',
    'Le.Samurai.1967.HUN.DVDRip.Xvid-akela',
    'A.kez.amely.a.bolcsot.ringatja.1992.DVDRip.XviD.HUN-HENTELES',
    'Maborosi',
    'Nyári háborúk 1080p',
    'Russell Peters - Outsourced',
    'Michael.Collins.1996.720p.HDTV.x264.DUAL-N&R',
    'Cobra.1986.BD25.VC-1.DTSHD.HUN-HDPre',
    'Scott.Pilgrim.Vs.the.World.2010.1080p.BluRay.DTS.x264.HUN-HDbox',
    'Sheena, a dzsungel királynője',
    'Scott.Pilgrim.vs.the.World.2010.HUN.BDRip.XviD-HCP',
    'Scott.Pilgrim.Vs.the.World.2010.720p.BluRay.x264.HUN-HDbox',
    'A törvény és Jake Wade',
    'Szerva.Itt.Pofon.Ott.2007.CUSTOM.DVDRip.XviD.Hun-JM',
    'Feltámadás',
    'Apocalypto BD50',
    'Eden.Lake.2008.1080p.BluRay.DTS.x264.Hun-Sadu',
    'Eden.Lake.2008.720p.BluRay.DTS.x264.Hun-Sadu',
    'Eden.Lake.Gyilkos.kilatasok.2008.HUN.BDRip.XviD-HUNDUB',
    'A halott ember levelei',
    'Legend.of.the.Guardians.The.Owls.of.GaHoole.2010.HUN.BDRip.Xvid-Thick',
    'Eden.Lake.2008.HUN.DVDRip.Xvid-Thick',
    'Negybalkez.2001.DVDRip.XviD.HUN-PROGiVAGYOKSZiA',
    'Russell Peters - Two Concerts, One Ticket',
    'Ősz New Yorkban 720p',
    'Pirates.of.the.Caribbean.At.Worlds.End.2007.BD25.VC1.DTS.HUN-HDPre',
    'Az én kicsi pónim',
    'K-19 - Atomcsapda',
    'Predators.2010.720p.RETAiL.BluRay.DTS.Hungarian.x264-WALLE',
    'Pulp Fiction.(1994).BD25.x264.DTSHD.HDHUN-HDPre',
    'The.Sorcerers.Apprentice.2010.720p.RETAiL.BluRay.DTS.Hungarian.x264-WALLE',
    'Április Ruandában',
    'Bölcsesség',
    'Cobra.1986.Bluray.1080p.DUBBED.DTS.HUN.x264-Girnyo',
    'Legend.of.the.Guardians.The.Owls.of.GaHoole.2010.1080p.BluRay.ENG.x264.HuN-TRiNiTY',
    'Serenity.2005.BDRip.XviD.Hun-lencse',
    'Bolondos dallamok - Tapsi hapsi gyüjteménye3',
    'A szakértő',
    'Hackers.1995.720p.HUN.ENG.HDTV.x264-iND',
    'Les.Rivieres.Pourpres.2.2004.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Minion Madness - Banana',
    'Elso.a.szerelem.2005.BDRip.XviD.Hun-lencse',
    'Karate tigris 4. - A szabadság fiai',
    'Toy Story 3 3D 1080p',
    'Greta',
    'White.Palace.1990.HUN.DVDRip.Xvid-ZOLTANHEV',
    'Tapló Télapó',
    'Hétszilvafa',
    'Okostojás',
    'Bon Jovi - Live at Madison Square Garden 720p',
    'Csunking Expressz',
    'Kick-Ass.2010.1080p.BluRay.DTS.x264.Hun-Sadu',
    'Kick-Ass.2010.720p.BluRay.DTS.x264.Hun-Sadu',
    'Rossz.tarsasag.2002.HUN.DVDRip.XviD-capuletto',
    'Underworld.Evolution.2006.BluRay.1080p.x264.DTS.HuN-BoNo',
    'London',
    'Wonderful.Days.2003.THEATRICAL.HUN.DVDRip.Xvid-ZOLTANHEV',
    'A Vörös Lámpások',
    'Brilliáns csapda',
    'Moszkva Tér',
    'Robin.Hood.Kalandjai.1938.Custom.DVDRip.XviD.Hun-JM',
    'Gengszterek.2002.iNT.DVDRip.XviD.HUN-tHHe',
    'Bound.1996.BluRay.1080p.DUBBED.DTS.HUN.x264-Girnyo',
    'A.kard.mestere.1990.HUN.DVDRip.Xvid-retro',
    'Szezám Utca - Jó Éjt Szezám Utca',
    'Nacho Libre 1080p',
    'Dalai Láma - Együttérzés A boldogság művészete - Nyilvános tanítás',
    'Dalai Láma - Csenrézi (A Szeretet Buddhája) - meghatalmazás és áldás',
    'Dalai Láma - Bevezetés a tibeti buddhizmusba I',
    'Ne hagyd magad, Pitkin',
    'Dr. Caligari',
    'Die.Hard.1988.READ.NFO.CUSTOM.BDRip.Xvid.Hun-Daw086',
    'The White Stripes - Under Great White Northern Lights',
    'Samsung demo oceanic life 1080p',
    'Tükröm, tükröm',
    'Pirosszka.2005.HUN.DVDRip.XviD-capuletto',
    'Caddyshack.1980.BluRay.1080p.DUBBED.DTS.HUN.x264-Girnyo',
    'Benjamin közlegény',
    'Ameddig a lábam bírja',
    'A.csend.fogsagaban.1994.Custom.DVDRip.XviD.Hun-lencse',
    'Tutira kamuzunk',
    'Életem',
    'A szex a legjobb diéta',
    'Scooby Doo 3. - Fény,Kamera,Fantom',
    'Bagdadi.tolvaj.Felujitott.v.1940.Dvdrip.Xvid.HUN.CS.H',
    'Rocktabor.2.Extra.Valtozat.2010.DVDRip.XviD.Hun-HDTV',
    'Fullasztó ölelés',
    'Szahara.2005.DVDRip.Xvid.HUN-BiTZoNe',
    'Rocky 1',
    'Tali-Ihantala 1944',
    'Tetsuo I. - Vasember',
    'Lakott sziget 2. - Az összecsapás',
    'Rush.Hour.1998.BluRay.1080p.DUBBED.DTS.HUN.x264-Girnyo',
    'Amerikai.szepseg.1999.BDRip.Xvid.Hun-Daw086',
    'Gladiator 1080p',
    'Történetek a sötét oldalról',
    'A rémkirály',
    'A Notre Dame-i toronyőr',
    'A pajzán Dagobert király',
    'Robin.Hood.2010.UNRATED.Directors.Cut.1080p.BluRay.DTS.Only.x264.HuN-VaLiaNT',
    'Flesh.And.Blood.1985.DVDRip.Xvid.Hun-BTW',
    'Garfield és a hálaadás ünnepe',
    'Csukaországban jártunk',
    'Lakott sziget',
    'Szelek Szárnyán',
    'Transporter.3[2008]DvDrip-aXXo',
    'Vadaszat.Eletre.Halalra.1991.Custom.DVDRip.XviD.Hun-JM',
    'Cimborák - Hegyen-völgyön',
    'Simone.2002.HUN.DVDRip.XviD-capuletto',
    'Cimborák - Nádiszélben',
    'A.keteltu.ember.1962.DVDRip.XviD.HunDub',
    'Gyógymód',
    'A keménymag',
    'Asterix.az.Olimpian.2008.HUN.DVDRip.XviD-capuletto',
    'Gyemantvadaszok.1949.Custom.DVDRip.XviD.Hun-unearth',
    'Az.utolso.bevetes.2005.DVDRip.Xvid.HUN-BiTZoNe',
    'Koncz Zsuzsa Dalok - Találomra',
    'Aludj csak, én álmodom 720p',
    'A grófnő',
    'The.Yes.Men.Fix.The.World.P2P.Edition.2010.Xvid-VODO',
    'Mar.Megint.Egy.Dilis.Amcsi.Film.2001.DVDRip.HunDub.Xvid-Mingan',
    'Csupasz pisztoly 33 13 Az utolsó merénylet',
    'Törvénytől sújtva',
    'Plots.With.A.View.2002.DVDRip.Xvid.Hun-BTW',
    'Iron.Man.2.2010.iNT.720p.RETAiL.BluRay.HUN.x264-AiR',
    'Az Emlékezés Pillanata',
    'K-19 - Atomcsapda 720p',
    'A.vadon.szava.1997.Custom.DVDRip.Xvid.Hun-Killer96',
    'Napló gyermekeimnek',
    'Bloodsport.1988.BluRay.720p.DUBBED.DTS.HUN.x264-Girnyo',
    'Woyzeck',
    'A Frozen Flower',
    'Pajzán kísértetek',
    'Párosban Párizsban',
    'Családba nem üt a ménkű',
    'Megállt a vonat',
    'Az.Admiralis.2008.HUN.BDRip.XviD-HUNDUB',
    'Halal.Velenceben.1971.Custom.Hun.DVDrip.xvid.BBM',
    'Haláli fegyver 720p',
    'Magyar népmesék - A királykisasszony cipője',
    'Gyorsan, mint a nyíl',
    'Dr. Bubó - Kérem a következőt! 4',
    'Saw.VI.2009.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Sherlock.Holmes.2009.720p.BluRay.DTS.HUN.x264-ROYALFLUSH',
    'Szederkert 3',
    'A vágy villamosa',
    'Barbárfivérek',
    'Hosszú.forró.nyár.1958.DVDRip.XviD.HUN-TeRaCoD',
    'Kung.Fu.Panda.2008.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'The.Prestige.2006.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Mi a csudát tudunk a világról 2. - Le a nyúl üregébe',
    'A Titanic elveszett testvérhajója',
    'Transformers',
    'The.Golden.Compass.2007.BDRip.XviD.Hun-B9R',
    'A Holocaust szemei',
    'Mentőcsapat a kenguruk földjén',
    'Magyar népmesék - A mindent járó malmocska',
    'Human Traffic',
    "Zatoichi's Cane Sword",
    'The.Haunting.Hour.Dont.Think.About.It.2007.CUSTOM.HUN.DVDRIP.XVID-HORRORFREAK',
    'Danielle Steel - A sors kereke',
    'Boldog Születésnapot',
    '56.Csepp.Ver.2007.HUN.DVDRiP.XviD-TheNameless',
    'Lányanya',
    'Miracle.At.St.Anna.2008.DVDRip.Xvid.HunSub-vTk',
    'Sinkó Andrea 3in1 edzésprogram',
    'Blöff 1080p BD50',
    'Terminator.1.1984.1080p.BluRay.x264.HUN.ENG-BiTZoNe',
    'Szépleányok - Az 1985-ös magyar szépségverseny története',
    'Hello Kitty és barátai 4. - A cirkusz a városba jön',
    'Azok a csodálatos férfiak',
    'Bambi',
    'Az Egy története',
    'The.Blind.Side.2009.BDRip.XviD-MegaPlay',
    'A Húsvét-sziget titka',
    'Pofonok.foldje.2004.720p.BluRay.x264.DTS.HUN-N&R',
    'Ichi the Killer-Koroshiya 1',
    'Junior.1994.DVDRip.XviD.Hun-April',
    'Traitor.720p.BluRay.5.1.HUN.5.1.ENG.x264-aNyaM',
    'Kukori és Kotkoda',
    'Szerzetesek a laboratóriumban',
    'Buszkeseg.es.balitelet.2005.BDRip.XviD.HUN-BD',
    'The.Remains.Of.The.Day.1993.Custom.Hun.PAL.DVDR-Joker',
    'Az.ordog.kriptaja.2009.BDRip.XviD.Hun-HDTV',
    'Az ördög maga',
    'A.Felejtes.Bere.2003.HUN.DVDrip.Xvid.AC3.5.1-viner',
    'Knight Rider 2000',
    'Rejtelyek.Tesz-Vesz.varosban.D4.2007.HUN.DVDRip.XviD-TTT',
    'Zatoichi And The Chess Expert',
    'Bizd.a.hackerre.2001.HUN.DVDrip.Xvid.AC3.5.1-viner',
    'A betörés',
    'Bover.szallo.2002.HUN.DVDrip.Xvid.AC3.5.1-viner',
    'Dilis bagázs',
    'Hello, Dolly!',
    'Tengeri farkasok',
    'Szabaditsatok.ki.Willyt.4.A.kaloz-obol.akcio.2010.RETAiL.DVDRip.XviD.Hun-HDTV',
    'Hurrikán',
    'A.verda.horda-Adj.el.vagy.hullj.el!2009.RETAiL.DVDRip.XviD.Hun-HDTV',
    'Az utolsó vacsora',
    'Viva High School Musical Mexico',
    'Danielle Steel - Palomino',
    'Never.Back.Down.2008.720p.Bluray.DTS.x264.HUN-Knight',
    'A gyűrűk Ura 2. - A két torony',
    'Modern Pimpernel',
    'Bűn és bűnhődés',
    'Leaves.Of.Grass.2009.RETAiL.DVDRip.XviD.AC3-ELiTE',
    'A piramisok rejtett titkai',
    "La.Marche.de.l'empereur.2005.720p.BluRay.DTS.x264.Hun-HDv",
    'Leviathan',
    'A máltai sólyom',
    'Halálforgás',
    'U-571.2000.BDRip.XviD.Hun-B9R',
    'Nem félünk a farkastól',
    'Két férfi a városban',
    'Mentőcsapat a kenguruk földjén',
    'Lake.Mungo.2008.DVDRip.XviD-HunSub.CMYK',
    'Lego-Clutch.Powers.kalandjai.2010.RETAiL.DVDRip.XviD.Hun-HDTV',
    'Angyal első látásra',
    'Frailty.2001.BDRip.XviD.HUN-1st',
    'Tibor vagyok, de hódítani akarok',
    'Esthajnalcsillag',
    'Az utolsó esély',
    'Shaun.of.the.Dead.2004.BDRip.XviD.Hun-lencse',
    'Tora! Tora! Tora!',
    'Vrungel Kapitány Kalandjai',
    'Zombieland.2009.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Ed Wood',
    'Narnia.Kronikai.-.Az.oroszlan.a.boszorkany.es. a.ruhasszekreny.1988.HUN.DVDRip.XviD.AC3.2.0-Hollow',
    'Mazli.2008.DVDRip.XviD.Hun-SeeDL',
    'A.Leny.II.1998.HUN.DVDRip.XviD.AC3.5.1-Hollow',
    'A.Leny.1995.HUN.DVDRip.XviD.AC3.5.1-Hollow',
    'Farkasok.birodalma.2005.HUN.DVDRip.XviD.AC3.5.1-Hollow',
    'Hé, haver, nyomd a verdát!',
    'Kukori és Kotkoda 2. -Kakasviadal',
    'Az.en.kicsi.ponim.1986.DVDRip.XviD.HUN-TeRaCoD',
    'Chaplin.1992.DVDRip.XviD.Hun-SeeDL',
    'Discovery.Channel - Utcai autóverseny - Egy éjszaka a Földön',
    'Aranyásó - A világ legnagyobb bankrablása',
    'Discovery.Channel - Szexualítás - ahogyan a műsor készült',
    'Moziklip',
    'Stephen.King-A.gyujtogato.1984.Xvid-Gepard',
    'Discovery Channel - A számítógépes játékok története',
    'A.Leny.III.2004.HUN.DVDRip.XviD.AC3.5.1-Hollow',
    'Csernobil - Élet a Holt Zónában',
    'Memento.BDRip.720p.x264.Hun-Optimus',
    'Discovery Channel - Szexualítás - aszexualítás',
    'Discovery Channel - Szexualítás - a monogámián túl',
    'Discovery Channel - Szexulítás - trágár tréfák',
    'Discovery Channel - Szexualítás - nudizmus',
    'Discovery Channel - Szexualítás - terhesség',
    'Discovery Channel - Szexualítás - szexjátékszerek',
    'Discovery Channel - Szexualítás - perverzitás',
    'A szabadság vihara',
    'Gyokerek.1977.DVDRip.XviD.Hun-SeeDL',
    'A szerelem Harley Davidsonon érkezik',
    'My Fair Lady',
    'Joao Magueijo ősrobbanás-elmélete - Discovery Science',
    'Csárdáskirálynő',
    'Nevetséges Napóleon',
    'Osho-Egyedul.az.uton.DvdRip-Ekhion',
    'Twilight zone',
    'Beszterce Ostroma',
    'Egyiptomi hárem hastánc iskola 2',
    'Egyiptomi hárem hastánc iskola - Sinka Viktóriával',
    'Haragban a világgal',
    'A.Felelem.Bere.HUN.DVDRip.Xvid-KotySoft',
    'Eberseg.2007.DVDRip.HUNDUB.XviD.AC3.5.1-Timba',
    'A hét szamuráj',
    'Saw.V.2008.iNT.1080p.BluRay.DTS.Only.x264.HuN-TRiNiTY',
    'Babar',
    'The.Sisterhood.of.the.Traveling.Pants.2.DVDRip.XviD-DiAMOND',
    'The.Chronicles.of.Riddick.2004.iNT.DirCut.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Breaking Glass',
    '10000.BC.2008.iNT.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Ladányi Tamás Horgásztechnikák kezdőknek és haladóknak',
    'Changeling.2008.iNT.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Szegény gazdagok',
    'Emberek a havason',
    'A rózsaszín párduc',
    'Kincskereso.kiskodmon.1973.DVDRip.Xvid.HUN-gABe',
    'Egérmese 3',
    'Trükkös halál 2',
    'Barbie - Hollywoodi álom',
    'A.Leny.IV-Az ebredes.2007.HUN.DVDRip.XviD.AC3.2.0-Hollow',
    'Fantozzi tovább tűr',
    'Fantozzi mindenki ellen',
    'Gyula vitéz télen-nyáron',
    'Final Fantasy VII - Dirge of Cerberus',
    'America - Freedom To Fascism',
    'Száguldás a semmibe',
    'Tűz van, babám!',
    'Ivan Csonkin közkatona élete és különleges kalandjai',
    'Bob herceg',
    'Madagascar.Escape.2.Africa.2008.1080p.BluRay.DTS.x264.HUN-TRiNiTY',
    'The.Illusionist.2006.720p.BluRay.HuN.EnG.x264-TRiNiTY',
    'Micimackó -Tavaszolás Zsebibabával',
    'South Park - Nagyobb, hosszabb és vágatlan',
    'A.mehek.titkos.elete.2008.HunDub.DVDRip.XviD.AC3.2.0-SeeDL',
    'The.Rock.1996.iNT.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'A Shaolin Kung Fu mítoszai és logikája',
    'Van, aki forrón szereti',
    'Stargate SG-1 - Profile on Daniel Jackson, extra',
    "Stargate SG-1 Secret Files of the SGC - Colonel Jack O'Neill",
    'Seven.Years.in.Tibet.1997.iNT.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Jeremiás',
    'A.szivem.erted.RAPes.2001.HUN.DVDRip.Xvid.AC3.5.1-Hollow',
    'Szezám utca - Elmo szeret téged!',
    'Journey.to.the.Center.of.the.Earth.2008.3D.720p.ENG.BluRay.HUN.x264-TRiNiTY',
    'A.hullam.2008.DvdRip.HUN.AC3.XviD-SH',
    'Bibor.Folyok.2.Az.apokalipszis.angyalai.2004.HUN.DVDRiP.XviD-seven',
    'National Geographic - Az a kritikus hat fok ',
    'A legyek ura',
    'Tények a vitaminokról',
    'Oltari.Volegeny.1999.DVDRip.x264.HUN-BOSS',
    'Forgószél',
    'The.Accidental.Husband[2008]DvDrip-aXXo',
    'Az elcsatolt területek visszafoglalása',
    'Sicko.2007.HUNSUB.DVDRiP.XviD-PRiM3',
    'Kis Piros Traktor 3. - Az év farmja',
    'Kis Piros Traktor 2. - A repülés',
    'Kis piros traktor 1. - Az aratás',
    'Alfred Hitchcock - A csalás',
    'Ben10 és az Omnitrix titka',
    'Bolondos dallamok - Csőrike és Szilveszter gyűjteménye 1',
    'Bolondos Dallamok - Speedy Gonzales Gyűjteménye 1',
    'Bolondos Dallamok - A Legbolondosabbak5',
    'Bolondos Dallamok - A legbolondosabbak 1',
    '4 Hónap, 3 Hét, 2 Nap',
    'Bolondos Dallamok - Tapsi Hapsi Gyűjteménye 1',
    'A jó, a rossz és a csúf',
    'Jézus Krisztus szupersztár',
    'Bolondos Dallamok - Dodó és Cucu gyűjtemény',
    'Bolondos.Dallamok.A.Legbolondosabbak.2',
    'Bolondos Dallamok - Tapsi Hapsi Gyűjteménye 2',
    'Pineapple.Express[2008]DvDrip.HunSub-aXXo',
    'Salsa ',
    'Az élet nyomában',
    'Montreali.bankrablas.1985.DVDRip.XviD.HUN-Xplosive',
    'The.Mask.1994.iNT.1080p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Zöld hentesek',
    'Revans',
    'Árnyékfeleség',
    'Hofi Géza - Még mindig aktuális',
    'Hofi Géza - 1991. december 31',
    'A Nagy Csapat 2',
    'Pulp.Fiction.1994.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'A nagy csapat',
    'Jack ',
    'Picasso kalandjai',
    'Leon, a profi',
    'Walt Disney - Karácsonyi Mesék',
    'A Világ 10 Legnagyobb Csalása',
    'A rózsaszín párduc nyomában',
    'Elmo megmenti a karácsonyt',
    'A rózsaszín párduc bosszúja',
    'A rózsaszín párduc újra lecsap',
    'Eszement Freddy',
    'A suttogó',
    'Futurama - The Beast with a Billion Backs',
    'Sex.and.the.City.2008.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Acélizom',
    'Állami áruház',
    'Kung.Fu.Panda.2008.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Három Férfi és egy Kis Hölgy',
    'Három Férfi és egy Bébi',
    'The.Prince.of.Egypt.1998.720p.HDTV.HuN.EnG.x264-TRiNiTY',
    'Scrat - No Time For Nuts',
    'Earth.2007.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Költői szerelem',
    'Zeitgeist.1.and.2.EngDub.HunSub.DVD5.PAL-korszellem.hu',
    'A Gyűrűk Ura - A király visszatér 1080p',
    'Gengszterképző',
    'Hancock.2008.Unrated.720p.BluRay.DTS.x264.HuN-TRiNiTY',
    'Az igazság a Rém rendes családról',
    'Az igazság a Jóbarátokról',
    'A Passió',
    'Máté evangéliuma',
    'Family.Guy.The.Movie.2005.DVDRip.XviD.iNTERNAL-AEN',
    'Budapest.Retro.2.DVDRip.HUNDUB.XviD-Timba',
    'Budapest.retro.1.DVDRip.HUNDUB.XviD-Timba',
    'A Madagaszkár Pingvinjei - Karácsonyi küldetés',
    'Pettson és Findus 3. Szarvasvadászat',
    'A vihar kapujában',
    'Dínó ',
    'Antal Imre - Kabarétréfák',
    'Mekk Elek, az ezermester',
    'Zeitgeist 2 - Addendum ',
    'Zeitgeist',
    'Micimackó - Tavaszolás zsebibabával',
    'Feketeszakáll szelleme',
    'Az arany bűvöletében',
    'The.Chronicles.of.Riddick.Dark.Fury.2004.RETAIL.DVDRiP.XviD.HUN-DynamicLife',
    'Gyáróriások II. - A BMW',
    // from different source here
    'The Walking Dead S05E03 720p HDTV x264-ASAP[ettv]',
    'Hercules (2014) 1080p BrRip H264 - YIFY',
    'Dawn.of.the.Planet.of.the.Apes.2014.HDRip.XViD-EVO',
    'The Big Bang Theory S08E06 HDTV XviD-LOL [eztv]',
    '22 Jump Street (2014) 720p BrRip x264 - YIFY',
    'Hercules.2014.EXTENDED.1080p.WEB-DL.DD5.1.H264-RARBG',
    'Hercules.2014.Extended.Cut.HDRip.XViD-juggs[ETRG]',
    'Hercules (2014) WEBDL DVDRip XviD-MAX',
    'WWE Hell in a Cell 2014 PPV WEB-DL x264-WD -={SPARROW}=-',
    'UFC.179.PPV.HDTV.x264-Ebi[rartv]',
    'Marvels Agents of S H I E L D S02E05 HDTV x264-KILLERS [eztv]',
    'X-Men.Days.of.Future.Past.2014.1080p.WEB-DL.DD5.1.H264-RARBG',
    'Guardians Of The Galaxy 2014 R6 720p HDCAM x264-JYK',
    "Marvel's.Agents.of.S.H.I.E.L.D.S02E01.Shadows.1080p.WEB-DL.DD5.1",
    'Marvels Agents of S.H.I.E.L.D. S02E06 HDTV x264-KILLERS[ettv]',
    'Guardians of the Galaxy (CamRip 2014)',
    'The.Walking.Dead.S05E03.1080p.WEB-DL.DD5.1.H.264-Cyphanix[rartv]',
    'Brave.2012.R5.DVDRip.XViD.LiNE-UNiQUE',
    'Lets.Be.Cops.2014.BRRip.XViD-juggs[ETRG]',
    'These.Final.Hours.2013.WBBRip XViD',
    'Downton Abbey 5x06 HDTV x264-FoV [eztv]',
    'Annabelle.2014.HC.HDRip.XViD.AC3-juggs[ETRG]',
    'Lucy.2014.HC.HDRip.XViD-juggs[ETRG]',
    'The Flash 2014 S01E04 HDTV x264-FUM[ettv]',
    'South Park S18E05 HDTV x264-KILLERS [eztv]',
    'The Flash 2014 S01E03 HDTV x264-LOL[ettv]',
    'The Flash 2014 S01E01 HDTV x264-LOL[ettv]',
    'Lucy 2014 Dual-Audio WEBRip 1400Mb',
    'Teenage Mutant Ninja Turtles (HdRip 2014)',
    'Teenage Mutant Ninja Turtles (unknown_release_type 2014)',
    'The Simpsons S26E05 HDTV x264 PROPER-LOL [eztv]',
    '2047 - Sights of Death (2014) 720p BrRip x264 - YIFY',
    'Two and a Half Men S12E01 HDTV x264 REPACK-LOL [eztv]',
    'Dinosaur 13 2014 WEBrip XviD AC3 MiLLENiUM',
    'Teenage.Mutant.Ninja.Turtles.2014.HDRip.XviD.MP3-RARBG',
    'Dawn.Of.The.Planet.of.The.Apes.2014.1080p.WEB-DL.DD51.H264-RARBG',
    'Teenage.Mutant.Ninja.Turtles.2014.720p.HDRip.x264.AC3.5.1-RARBG',
    'Gotham.S01E05.Viper.WEB-DL.x264.AAC',
    'Into.The.Storm.2014.1080p.WEB-DL.AAC2.0.H264-RARBG',
    'Lucy 2014 Dual-Audio 720p WEBRip',
    'Into The Storm 2014 1080p BRRip x264 DTS-JYK',
    'Sin.City.A.Dame.to.Kill.For.2014.1080p.BluRay.x264-SPARKS',
    'WWE Monday Night Raw 3rd Nov hun jap 2014 HDTV x264-Sir Paul',
    'Jack.And.The.Cuckoo-Clock.ger.Heart.2013.BRRip XViD',
    'WWE Hell in a Cell 2014 HDTV x264 SNHD',
    'Dracula.Untold.2014.TS.XViD.GER.AC3.MrSeeN-SiMPLE',
    'The Missing 1x01 Pilot HDTV x264-FoV [eztv]',
    'Doctor.Who.2005.8x11.Dark.Water.720p.HDTV.x264-FoV[rartv]',
    'Gotham.S01E07.Penguins.Umbrella.WEB-DL.x264.AAC',
    'One Shot [2014] DVDRip XViD-ViCKY',
    'The Shaukeens 2014 Hindi ENG (1CD) DvDScr x264 HUN AAC...Hon3y',
    'The Shaukeens (2014) 1CD DvDScr Rip x264 [DDR]',
    'Annabelle.2014.1080p.PROPER.HC.WEBRip.x264.AAC.2.0-RARBG',
    'Interstellar (2014) CAM ENG x264 AAC-CPG',
    'Guardians of the Galaxy (2014) Dual Audio DVDRip AVI',
    'Eliza Graves (2014) Dual Audio WEB-DL 720p MKV x264',
    'WWE Monday Night Raw 2014 WS PDTV x264-RKOFAN1990 -={SPARR',
    'Sons.of.Anarchy.S01E03',
    'doctor_who_2005.8x12.death_in_heaven.720p_hdtv_x264-fov',
    'breaking.bad.s01e01.720p.bluray.x264-reward',
    'Game of Thrones - 4x03 - Breaker of Chains',
    '[720pMkv.Com]_sons.of.anarchy.s05e10.480p.BluRay.x264-GAnGSteR',
    '[ www.Speed.cd ] -Sons.of.Anarchy.S07E07.720p.HDTV.X264-DIMENSION',
    'Community.s02e20.rus.eng.720p.Kybik.v.Kybe',
    'The.Jungle.Book.2016.3D.1080p.BRRip.SBS.x264.AAC-ETRG',
    'Ant-Man.2015.3D.1080p.BRRip.Half-SBS.x264.AAC-m2g',
    'Ice.Age.Collision.Course.2016.READNFO.720p.HDRIP.X264.AC3.TiTAN',
    'Red.Sonja.Queen.Of.Plagues.2016.BDRip.x264-W4F[PRiME]',
    'The Purge Election Year (2016) HC - 720p HDRiP - 900MB - ShAaNi',
    'War Dogs (2016) HDTS 600MB - NBY',
    'The Hateful Eight (2015) 720p BluRay - x265 HEVC - 999MB - ShAaN',
    'The.Boss.2016.UNRATED.720p.BRRip.x264.AAC-ETRG',
    'Return.To.Snowy.River.1988.iNTERNAL.DVDRip.x264-W4F[PRiME]',
    'Akira (2016) - UpScaled - 720p - DesiSCR-Rip - Hindi - x264 - AC3 - 5.1 - Mafiaking - M2Tv',
    'Ben Hur 2016 TELESYNC x264 AC3 MAXPRO',
    'The.Secret.Life.of.Pets.2016.HDRiP.AAC-LC.x264-LEGi0N',
    'OnlyFans.Selling.Sexy.2021.720p.WEB.h264-KOGi',
    'The.Stand.2020.S01.720p.AMZN.WEB-DL.DDP5.1.H.264-NTG',
    'The.Stand.2020.S01E03.Blank.Page.720p.AMZN.WEB-DL.DDP5.1.H.264-NTG.mkv',
    'A.ferfi.aki.szerette.a.noket.1977.HUN.FRE.CUSTOM.1080p.BluRay.x264-PLAN9.mkv',
    'Office.39.Kims.Cash.Machine.2020.ENG.HUN.1080p.WEB.h264-OPUS.mkv',
    '[Snow-Raws] To Aru Majutsu no Index III EP04 (BD 1920x1080 HEVC-YUV420P10 FLAC).mkv',
    'Saenai Heroine no Sodatekata - 02 (BD 1280x720 x264 AAC)',
    'Aladdin.1992.1080p.BluRay.DTS.x264.HuN',
    '1 gyakorlat kedd-20210209_073607-Meeting Recording',
    'AL.288-1.2014.HC.HDRip.XViD.AMZN.AC3-juggs[ETRG]',
    'A mackótestvér',
    'Két kicsi meg egy nagy',
    '2012',
    'Két lotti',
    'Ragadozók földje S01E01 720p',
    'Avangers.The.Infinity.War.S05E04.2018.x264.DTS.HUN.ENG.GER.2014p.EXTENDED.AMZN.HDTV.BDRip.REPACK.WS.MKV.[BULSHIT]-ThisIsTheGroup',
    'Sortűz egy fekete bivalyért 1080i',
];

module.exports.torrentMovieNames = torrentMovieNames;

// PLAIN TEXT
/*
TLotR.The.Fellowship.of.the.Ring.2001.EE.UHD.BluRay.2160p.TrueHD.7.1.DoVi.x265.HuN-TRiNiTY
Go.Trabi.Go.2.1992.DVDRip.x264.HUN-GEO
Go.Trabi.Go.1991.DVDRip.x264.HUN-GEO
Tales.Of.The.Riverbank.2008.1080p.WEB-DL.x264.HUN.ENG-VHS
The.Zero.Theorem.2013.ReaD.NfO.BDRip.x264.DD5.1.HuN-BaKeR
The.Zero.Theorem.2013.1080p.BluRay.ReMuX.AvC.DD5.1.HuN-BaKeR
Xicos.Journey.2020.REPACK.WEB.H264-NTROPiC
First.Monday.in.October.1981.DVDRip.x264.HUN-GEO
A.Rozsaszin.Parduc.1963.BluRay.720p.x264.3xHun-Pirosasz
Xicos.Journey.2020.1080p.WEB.H264-NTROPiC
Xicos.Journey.2020.720p.WEB.H264-NTROPiC
Les.Francis.2014.FRENCH.1080p.BluRay.DTS.x264.Hun-ARROW
Rat.Race.2001.1080p.WEB-DL.x264.HUN.ENG-VHS
Getting.Even.with.Dad.1994.1080p.BluRay.x264.Hun-TRT
Roma.2018.Read.Nfo.Spanish.BDRip.x264.Hunsub-eStone
Marc.Camoletti.Hatan.pizsamaban.2020.1080p.WEB-DL.AAC2.0.H.264.HUN-FLY
The.Boy.Who.Could.Fly.1986.1080p.WEB-DL.x264.2xHUN.ENG-VHS
Brahmotsavam.2016.720p.x264.E-AC3.HunSub-vTk
Bigfoot.Family.2020.3D.MULTi.1080p.BluRay.x264-3DMax
Lantana.2001.AMZN.WEBRiP.x264.HuN-TRiNiTY
Kundun.1997.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY
Krigen.2015.READ.NFO.1080p.BluRay.DD5.1.x264.HuN-TRiNiTY
Limitless.2011.720p.Hybrid.Open.Matte.BluRay.DTS.x264.Hun-L77
211-es cella 1080p REMUX
Cannibal.Holocaust.XT.1980.1080p.BluRay.AVC.ReMuX.DD2.0-HuN-Jak68
The.Heartbreak.Kid.2007.READ.NFO.720p.BluRay.DD5.1.x264.HuN-TRiNiTY
The.Heartbreak.Kid.2007.READ.NFO.1080p.BluRay.DD5.1.x264.HuN-TRiNiTY
Nadine.1987.WEBRIP.x264.HUN-Wolf
Einstein és Hawking, az Univerzum mesterei 720p
A dagály birodalma
War.and.Peace.1956.1080p.BluRay.REMUX.AVC.TrueHD.2.0.HuN-TRiNiTY
Breaking.News.in.Yuba.County.2021.2160p.WEB.H265-NAISU
A.Fish.Called.Wanda.1988.READ.NFO.720p.BluRay.DD5.1.x264.HuN-TRiNiTY
Repul.a.haverom.1986.Custom.Ntsc.Hun.Dvd9-patuss
The.Bridge.On.The.River.Kwai.1957.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY
Judas.and.the.Black.Messiah.2021.2160p.HMAX.WEB-DL.DDP5.1.Atmos.HEVC-CMRG
Heavy.2021.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO
A dagály birodalma 1080i
Pentek.Rezi.1941.WEBRIP.x264.HUN-Wolf
Threesome.1994.WEBRIP.x264.HUN-Wolf
Ismeros.Ismeretlenek.1958.BDRemux.1080p.AVC.Hun-Pirosasz
The.Winslow.Boy.1999.1080p.BluRay.REMUX.AVC.PCM.2.0.HuN-TRiNiTY
Breaking.News.in.Yuba.County.2021.720p.WEB.H264-NAISU
A.masik.csaj.2013.WEBRip.x264.DD5.1.HUN-Menta
Ötéves jegyesség
The.Dickumentary.2014.1080p.WEB.h264-SECRETOS
The.Dickumentary.2014.WEB.h264-SECRETOS
The.Dickumentary.2014.720p.WEB.h264-SECRETOS
Fukkatsu no hi 720p
The.Secret.Garden.2020.BD50.AVC.DTSHD.HUN.2.0-TRiNiTY
Shampoo.1975.DVDRip.x264.HUN-GEO
Endings.Beginnings.2019.720p.BluRay.x264-RUSTED
The.Infamous.Future.2021.720p.WEB.h264-OPUS
The.Infamous.Future.2021.1080p.WEB.h264-OPUS
I.Am.Duran.2019.1080p.Blu-ray.AVC.DTS-HD.MA.5.1-VEXHD
To.All.the.Boys.Always.and.Forever.2021.720p.WEB-DL.DD+5.1.H264.HuN-No1
Horror.Noire.A.History.of.Black.Horror.2019.1080p.AMZN.WEBRip.DDP2.0.x264-NTG
Winnetou.es.Old.Shatterhand.a.Halal.Volgyeben.1968.BDRip.x264.Hun-eStone
Crime.Story.1993.BDRip.x264.HUN-GEO
Winnetou.es baratja.Old.Firehand.1966.BDRip.x264.Hun-eStone
Winnetou.es.a.felver.Apanatschi.1966.Read.Nfo.BDRip.x264.Hun-eStone
4x4.2019.SPANISH.ENSUBBED.1080p.WEBRip.DDP2.0.x264-BobDobbs
Beauty.in.the.Broken.2015.720p.WEB.h264-iNTENSO
Dark.Sense.2019.720p.WEB.h264-iNTENSO
Winnetou.bosszuja.1965.Read.Nfo.BDRip.x264.Hun-eStone
Az.olajherceg.1965.BDRip.x264.Hun-eStone
Keselyuk.karmaiban.1964.Read.Nfo.BDRip.x264.Hun-eStone
Dark.Sense.2019.WEB.h264-iNTENSO
Winnetou.3.Winnetou.halala.1965.BDRip.x264.Hun-eStone
Dark.Star.HR.Gigers.Welt.2014.GERMAN.1080p.AMZN.WEBRip.DDP2.0.x264-MRCS
Scary.or.Die.2012.1080p.AMZN.WEBRip.DDP5.1.x264-PTP
Xicos.Journey.2021.720p.WEB-DL.DD+5.1.H264.HuN-No1
Winnetou.2.Az.utolso.renegatok.1964.BDRip.x264.Hun-eStone
When.The.Bough.Breaks.1994.WEBRIP.x264.HUN-Wolf
Winnetou.1963.Read.Nfo.BDRip.x264.Hun-eStone
Violent.City.1970.BDRip.x264.HUN-GEO
Americas.Hangar.2007.1080p.AMZN.WEBRip.DDP2.0.x264-BTN
Utazas.a.multbol.1942.HUN.ENG.CUSTOM.1080p.BluRay.x264.PLAN9
Barb.and.Star.Go.to.Vista.Del.Mar.2021.HDR.2160p.WEB.H265-NAISU
Barb.and.Star.Go.to.Vista.Del.Mar.2021.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO
The.Porter.The.Untold.Story.At.Everest.2020.1080p.WEB.h264-ASCENDANCE
A jáde démon királysága
Rambo 2 BD50
The.Big.Wave.Project.2017.1080p.BluRay.x264.DD5.1-Candial
Un.Divan.A.New.York.1996.WEBRIP.x264.HUN-Wolf
Cyberjack.1995.WEBRIP.x264.HUN-Wolf
Dont.Crack.Under.Pressure.2015.1080p.BluRay.x264.FLAC.2.0-HANDJOB
A.kis.gurmek.2018.WEBRip.x264.DD2.0.HUN-Menta
Xicos.Journey.2021.NF.WEBRip.x264.HUN-SFY
The.Giant.Robber.Crab.2019.1080p.AMZN.WEBRip.DD2.0.x264-NOGRP
Xicos.Journey.2021.REPACK.1080p.NF.WEB-DL.DDP5.1.H.264.HUN.SPA-PTHD
Déli terminál
Young.Hearts.2021.1080p.WEB-DL.DD5.1.H.264-EVO
To.All.The.Boys.Always.And.Forever.2021.NF.WEBRip.x264.HUN-SFY
Bigfoot.Family.2020.1080p.BluRay.x264-WoAT
The.Dissident.2020.1080p.WEB.h264-OPUS
A professzor
Assassins.2020.720p.WEB.h264-OPUS
Muscle.2019.BDRip.x264-SCARE
Breaking.News.in.Yuba.County.2021.1080p.WEB.H264-NAISU
The.Cider.House.Rules.1999.Open.Matte.STARZ.WEBRip.x264.Hun-L77
Willy's Wonderland
Breaking News in Yuba County
Judas.and.the.Black.Messiah.2021.720p.WEB.H264-NAISU
Ill.Meet.You.There.2021.1080p.WEB-DL.DD5.1.H.264-EVO
To.All.the.Boys.Always.and.Forever.2021.720p.WEB.H264-NAISU
The Map of Tiny Perfect Things
Music.2021.1080p.WEB-DL.DD5.1.H.264-EVO
To.All.The.Boys.Always.And.Forever.2021.1080p.NF.WEB-DL.DDP5.1.Atmos.H.264.HUN.ENG-PTHD
Legend.of.Deification.2020.BluRay.Remux.1080p.AVC.DTS-HD.MA5.1-GS88
Willys.Wonderland.2021.1080p.WEB-DL.DD5.1.H.264-EVO
Wrong.Turn.2021.1080p.Bluray.DTS-HD.MA.5.1.X264-EVO
The.Map.of.Tiny.Perfect.Things.2021.1080p.AMZN.WEB-DL.DDP5.1.H.264-CMRG
Silk.Road.2021.1080p.Bluray.DTS-HD.MA.5.1.X264-EVO
Paradise.Cove.2021.1080p.WEB-DL.DD5.1.H.264-EVO
I.Blame.Society.2021.1080p.WEB-DL.DD5.1.H264-CMRG
Cowboys.2021.1080p.WEB-DL.DD5.1.H.264-EVO
Lapsis.2020.1080p.WEB-DL.DD5.1.H.264-EVO
Barb.and.Star.Go.to.Vista.Del.Mar.2021.720p.WEB.H264-NAISU
Blizzard.Of.Souls.2019.1080p.WEB-DL.LATVIA.DD5.1.HUN.x264.SirSzaal
Blizzard.Of.Souls.2019.720p.WEB-DL.LATVIA.DD5.1.HUN.x264.SirSzaal
Allamkozi.Szerelem.2014.WEB-DLRip.x264.HUN-EKG
Amikor.Enekes.Voltam.2006.720p.WEB-DL.x264.HUN-EKG
Masodik.Muszak.1984.AMZN.WEB-DL.1080p.x264.Hun-Pirosasz
Old.Shatterhand.1964.1080p.Remux.AVC.DTS-HD.MA.2.0.HUN-CRW
The.Map.of.Tiny.Perfect.Things.2021.HDR.2160p.WEB.H264-NAISU
The.Map.of.Tiny.Perfect.Things.2021.1080p.WEB.H264-NAISU
The.Map.of.Tiny.Perfect.Things.2021.720p.WEB.H264-NAISU
The.Tank.2017.720p.WEB.h264-NOMA
The.Tank.2017.1080p.WEB.h264-NOMA
Getting.Even.with.Dad.1994.1080p.WEB.h264-NOMA
Topical.Spanish.1970.SPANiSH.1080p.WEBRip.x264-SOMBRA
Funhouse.2019.720p.WEB.H264-NTROPiC
Funhouse.2019.WEB.H264-NTROPiC
Tuskegee.Airmen.Legacy.of.Courage.2021.720p.WEB.h264-BAE
Samsquanch.County.2020.1080p.WEB.h264-ASCENDANCE
For.Whom.The.Alchemist.Exists.2019.1080p.WEB.H264-URANiME
Save.Yourselves.2020.BDRip.x264-VETO
Lionheart.1990.1080p.BluRay.AAC2.0.x264.HuN-Apex
Serving.For.Justice.The.Story.Of.The.333Rd.Field.Artillery.Battalion.2020.1080p.WEB.h264-ASCENDANCE
Snuff.1976.1080p.BluRay.x264-YAMG
The.Mask.of.Zorro.1998.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY
Snuff.1976.720p.BluRay.x264-YAMG
King.A.Filmed.Record.Montgomery.To.Memphis.1970.Part.2.1080p.WEB.H264-CBFM
Old.Shatterhand.1964.BDRip.x264.HUN-CRW
Rohamsisakos madonna
Regarding.Henry.1991.DVDRip.x264.HUN-GEO
OnlyFans.Selling.Sexy.2021.1080p.WEB.h264-KOGi
OnlyFans.Selling.Sexy.2021.720p.WEB.h264-KOGi
Dirty.Work.1998.1080p.BluRay.X264-AMIABLE
A.ferfi.aki.szerette.a.noket.1977.HUN.FRE.CUSTOM.1080p.BluRay.x264-PLAN9
Wicker Park
Save.Yourselves.2020.720p.BluRay.x264-VETO
Kréta és Szantorini
Growing.Up.Milwaukee.2020.1080p.WEB.h264-KOGi
Growing.Up.Milwaukee.2020.720p.WEB.h264-KOGi
Deep.Down.2021.720p.WEB.h264-KOGi
Deep.Down.2021.1080p.WEB.h264-KOGi
No.Chance.2020.1080p.WEB.h264-WATCHER
Lost.Angelas.2019.1080p.WEB.h264-WATCHER
Office.39.Kims.Cash.Machine.2020.1080p.WEB.h264-OPUS
Saigon.Metalhood.2020.1080p.WEB.h264-OPUS
Shadows.of.Sofia.2019.720p.WEB.h264-OPUS
New.Police.Story.2004.BDRip.x264.DD.5.1.HUN-GEO
Saigon.Metalhood.2020.720p.WEB.h264-OPUS
Lost.For.Words.2013.720p.WEB.h264-WATCHER
Vörös pont
Lost.Angelas.2019.720p.WEB.h264-WATCHER
Find.Your.Groove.2020.720p.WEB.h264-OPUS
A majmok bolygója BD50
Algorithm - Bliss
Daddy.and.the.Warlord.2019.1080p.WEB.h264-OPUS
Daddy.and.the.Warlord.2019.720p.WEB.h264-OPUS
Brash.Boys.Club.2020.1080p.WEB.h264-SECRETOS
Brash.Boys.Club.2020.720p.WEB.h264-SECRETOS
Brash.Boys.Club.2020.WEB.h264-SECRETOS
Sexmission.1984.720p.BluRay.HE-AAC.2.0.x264.HUN.POL
The.Hidden.II.1993.WEB-DL.x264.Hun-MrDeta
Given Movie 1080p
Gran Canaria
The.Hidden.II.1993.1080p.AMZN.WEB-DL.x264.DD+2.0.Hun-MrDeta
I.Heart.Huckabees.2004.AMZN.WEBRip.DD2.x264.HuN-BaKeR
Monte Walsh.1970.BDRip.x264.HUN-GEO
The.Bonfire.Of.The.Vanities.1990.BDRip.DD2.0.x264.HuN-BaKeR
A Karibu út
Babycall.2011.BluRay.720p.x264.Hunsub-Pirosasz
S.He.2018.WEB.H264-13
S.He.2018.1080p.WEB.H264-13
Happy.Death.Day.2017.720p.Open.Matte.AMZN.WEB-DL.TDS.x264.2xHun-L77
16.Bars.2018.1080p.WEB.H264-13
16.Bars.2018.WEB.H264-13
16.Bars.2018.720p.WEB.H264-13
Zsebpenz.1975.HUN.FRE.CUSTOM.1080p.BluRay.x264-PLAN9
Squared.Love.2021.1080p.NF.WEB-DL.DDP5.1.H.264.HUNSUB-PTHD
Red.Dot.2021.1080p.NF.WEB-DL.DDP5.1.H.264.HUNSUB-PTHD
There.Is.No.I.in.Threesome.2021.1080p.WEB.H264-NAISU
There.Is.No.I.in.Threesome.2021.720p.WEB.H264-NAISU
No.Reasons.2021.1080p.AMZN.WEBRip.DD2.0.X.264-EVO
Godsend.2021.1080p.AMZN.WEB-DL.DDP2.0.H264-CMRG
The.Brink.2020.1080p.AMZN.WEBRip.DD5.1.x264-NTG
O.az.igazi.2017.AMZN.WEBRip.x264.DD2.0.HUN-Menta
Irok.a.pacban.2014.AMZN.WEBRip.x264.DD2.0.HUN-Menta
Tisztitokura.2016.WEBRip.x264.DD2.0.HUN-Menta
Pentek.Rezi.1941.HUN.ITA.CUSTOM.1080p.WEB-DL.x264-PLAN9
Fear.of.Rain.2021.BDRip.x264.HunSub-Unknown
The.Killing.Yard.2001.READ.NFO.Custom.Hun.PAL.DVDR-DOZSO
We.Bare.Bears.The.Movie.2020.720p.WEB.h264-KOGi
Buried.Alive.1990.1080p.BluRay.DTS.x264.HuN-BAYLEE
A.tet.az.eleted.2004.TVRiP.HUN.x264-cabcab
Repul.a.haverom.1986.DVDRiP.HUN.x264-cabcab
Where.She.Lies.2020.720p.WEB.h264-OPUS
Camp.14.Total.Control.Zone.2012.720p.WEB.h264-OPUS
A.Thin.Line.Between.Love.and.Hate.1996.1080p.WEB.h264-NOMA
Melodi.Grand.Prix.Delfinale.4.2021.NORWEGiAN.720p.WEB.h264-SKRiTT
Occupy.The.Movie.2013.720p.WEB.h264-OPUS
Only.You.1992.1080p.WEB-DL.x264.HUN.ENG-VHS
J.E.S.U.S.A.2020.720p.WEB.h264-OPUS
Risen.The.Story.of.Chron.Hell.Razah.Smith.2020.1080p.WEB.h264-OPUS
J.E.S.U.S.A.2020.1080p.WEB.h264-OPUS
Doomsday.2008.Unrated.720p.BluRay.DD5.1.x264.HuN-TRiNiTY
Camp.14.Total.Control.Zone.2012.1080p.WEB.h264-OPUS
Magyar Retró
Phoenix.Oregon.2019.BDRip.x264-BiPOLAR
Michael.2011.BDRip.x264-BiPOLAR
Lara.2019.BDRip.x264-BiPOLAR
Jet.Generation.1968.THEATRiCAL.BDRip.x264-BiPOLAR
Jet.Generation.1968.BDRip.x264-BiPOLAR
Jet.Generation.1968.THEATRiCAL.1080p.BluRay.x264-BiPOLAR
Jet.Generation.1968.1080p.BluRay.x264-BiPOLAR
The.Dead.Lands.2014.HUN.BDRiP.DD2.0.x264-Gianni
The.Dead.Lands.2014.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HUN-Gianni
Three.Fugitives.1989.DVDRip.x264.HUN-GEO
Bram.Stoker's.Dracula.1992.1080p.GBR.BluRay.AVC.DTS-HD.MA.5.1-GSeye
Phoenix.Oregon.2019.720p.BluRay.x264-BiPOLAR
Super Cities - Róma
Jet.Generation.1968.THEATRiCAL.720p.BluRay.x264-BiPOLAR
Days.of.the.Bagnold.Summer.2019.720p.BluRay.DD5.1.x264.HuN-No1
Jet.Generation.1968.720p.BluRay.x264-BiPOLAR
Days.of.the.Bagnold.Summer.2019.1080p.BluRay.DD5.1.x264.HuN-No1
Deadpool.2016.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY
A.hatalom.ara.1969.Read.Nfo.BDRip.x264.Hun-eStone
A.Distant.Neighbourhood.2010.REPACK.1080p.BluRay.x264-USURY
Light.Sleeper.1992.BDRip.x264.HUN-CRW
JL.Ranch.2016.1080p.AMZN.WEB-DL.DDP5.1.H.264.HUN.ENG-SFY
JL.Ranch.2016.720p.AMZN.WEB-DL.DDP5.1.H.264.HUN.ENG-SFY
JL.Ranch.2016.AMZN.WEBRip.x264.HUN-SFY
A.Distant.Neighbourhood.2010.REPACK.720p.BluRay.x264-USURY
Trigger.2016.WEB-DL.H264.HuN-No1
The.Mirror.Crackd.1980.BDRip.x264.HUN-GEO
Wonder.Boys.2000.720p.BluRay.DD5.0.x264.Hun-boOk
Super Cities - Rio De Janeiro
Super Cities - New York
Light.Sleeper.1992.1080p.Remux.AVC.DTS-HD.MA.2.0.HUN-CRW
Violet.Evergarden.Eternity.and.the.Auto.Memories.Doll.2019.BDRip.x264-HAiKU
Violet.Evergarden.Eternity.and.the.Auto.Memories.Doll.2019.720p.BluRay.x264-HAiKU
A.Whale.of.a.Tale.1976.1080p.WEBRip.x264.Hun-DOZSO
Burglar.1987.DVDRip.x264.HUN-GEO
Hoshi.wo.Ou.Kodomo.2011.1080p.BluRay.DTS-THORA
Super Cities - London
Jegkalozok.1984.BluRay.1080p.x264.Hun-Pirosasz
You.Get.Me.2017.720p.WEBRip.x264-STRiFE
Oroszlánok árnyékában
Greenland.2020.READ.NFO.2160p.UHD.BluRay.REMUX.TrueHD.Atmos.7.1.HDR.HEVC.HuN-TRiNiTY
Cant.Forget.New.Jersey.2019.WEB.H264-13
Greenland.2020.READ.NFO.BDRip.x264.HuN-TRiNiTY
Greenland.2020.READ.NFO.720p.BluRay.DD5.1.x264.HuN-TRiNiTY
Greenland.2020.READ.NFO.1080p.BluRay.DD+7.1.x264.HuN-TRiNiTY
Greenland.2020.READ.NFO.1080p.BluRay.REMUX.TrueHD.Atmos.7.1.AVC.HuN-TRiNiTY
Greenland.2020.READ.NFO.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY
 Csúnyán szép az élet
Fast.and.Furious.Presents.Hobbs.and.Shaw.2019.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY
The.Fate.of.the.Furious.2017.1080p.UHD.BluRay.DD+7.1.HuN-TRiNiTY
Fast.and.Furious.7.2015.Extended.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY
Fast.and.Furious.6.2013.Extended.1080p.UHD.BluRay.DD+5.1.x264.HuN-TRiNiTY
Fast.and.Furious.2009.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY
The.Fast.and.the.Furious.Tokyo.Drift.2006.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY
2.Fast.2.Furious.2003.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY
The.Fast.and.the.Furious.2001.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY
Oroszlánok árnyékában 720p
Veszedelmes Afrika - Mindent az utódokért
Action.Jackson.1988.ReaD.NfO.720p.BluRay.x264.DD2.0.2XHuN-BaKeR
Action.Jackson.1988.ReaD.NfO.1080p.BluRay.x264.DD2.0.2XHuN-BaKeR
Action.Jackson.1988.ReaD.NfO.1080p.BluRay.ReMuX.AvC.DD2.0.2XHuN-BaKeR
Action.Jackson.1988.ReaD.NfO.BDRip.DD2.0.x264.HuN-BaKeR
News.of.the.World.2020.2160p.AMZN.WEB-DL.DDP5.1.HDR.HEVC.HUN.ENG-SFY
The.Misadventures.of.Hedi.and.Cokeman.2021.720p.NF.WEB-DL.DDP5.1.x264-iKA
The.Misadventures.of.Hedi.and.Cokeman.2021.1080p.NF.WEB-DL.DDP5.1.x264-iKA
News.of.the.World.2020.1080p.AMZN.WEB-DL.DDP5.1.H.264.HUN.ENG-PTHD
News.of.the.World.2020.720p.AMZN.WEB-DL.DDP5.1.H.264.HUN.ENG-PTHD
News.of.the.World.2020.AMZN.WEBRip.x264.HUN-SFY
Az.ember.aki.nem.tud.meghalni.1994.VHSRiP.HUN.x264-cabcab
A.cingar.ferfi.nyomaban.1936.HUN.ENG.CUSTOM.1080p.BluRay.x264-PLAN9
Veszedelmes Afrika - Mindent az utódokért 720p
Howl.2015.1080p.BluRay.x264-RRH
Black.Art.In.the.Absence.of.Light.2021.720p.WEB.h264-KOGi
The.Croods.A.New.Age.2020.1080p.Bluray.X264.DTS-EVO
Sator.2020.1080p.WEB-DL.DD5.1.H.264-EVO
The.Great.Silence.2020.1080p.BluRay.x264-GETiT
What.Killed.Maradona.2021.720p.WEB.H264-CBFM
Eroszakos.Mult.2005.BluRay.1080p.x264.Hun-Pirosasz
Paydirt.2020.DVDRip.x264-ESX
Elizabeth.Is.Missing.2019.DVDRip.x264-ESX
Edge.of.Extinction.2020.DVDRip.x264-ESX
Seven.Sinners.1940.RESTORED.BDRip.x264-ORBS
Pittsburgh.1942.RESTORED.BDRip.x264-ORBS
Pittsburgh.1942.720p.BluRay.x264-ORBS
Pittsburgh.1942.1080p.BluRay.x264-ORBS
Tul.szep.a.menyasszony.1956.HUN.FRE.CUSTOM.1080p.BluRay.x264-PLAN9
My.Fellow.Americans.1996.1080p.WEB-DL.x264.HUN.ENG-VHS
Two.of.Us.2020.PROPER.BDRiP.x264-GUACAMOLE
Two.of.Us.2020.PROPER.1080p.BluRay.x264-GUACAMOLE
The.Operative.2019.720p.BluRay.DD5.1.x264.Hun-boOk
Two.of.Us.2020.PROPER.720p.BluRay.x264-GUACAMOLE
The.Operative.2019.1080p.BluRay.DDP5.1.x264.Hun-boOk
Nulladik óra BD50
Mamma.Mia.Here.We.Go.Again.2018.2160p.UHD.BluRay.TrueHD.7.1.DoVi.x265.HuN-TRiNiTY
Mamma.Mia.2008.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY
Lord.of.the.Flies.1963.1080p.BluRay.FLAC.x264.HuN-TRiNiTY
Nadine.1987.1080p.WEB-DL.x264.HUN.ENG-VHS
The.Great.Silence.2020.German.DL.1080p.BluRay.AVC-HOVAC
Aquaslash.Vom.Spassbad.zum.Blutbad.2019.German.DL.1080p.BluRay.AVC-SAViOURHD
Breeder.Die.Zucht.2020.GERMAN.720p.BluRay.x264-UNiVERSUM
Before.The.Fire.2020.GERMAN.720p.BluRay.x264-UNiVERSUM
Horizon.Line.2020.WEBRip.x264.HunSub-Unknown
Faceless.2021.1080p.WEB-DL.DD5.1.H.264-EVO
The.Great.Silence.2020.BDRip.x264-GETiT
Friday.the.13th.Part.3.1982.1080p.2D.BluRay.AVC.ReMuX.DD2.0-HuN-Jak68
A.nagy.gyemantrablas.1992.VHSRiP.HUN.x264-cabcab
Booty.Call.1997.DVDRip.x264.HUN-GEO
Hongkong.bugyrai.1988.VHSRiP.HUN.x264-cabcab
Total.Recall.1990.1080p.UHD.BluRay.DD+7.1.HDR.x265.HuN-TRiNiTY
When.the.Bell.Rings.2014.DOCU.720p.WEB-DL.x264.AAC.ReLeNTLesS
I.am.Duran.2019.720p.BluRay.x264-HANDJOB
Escape.From.The.Planet.Of.The.Apes.1971.1080p.BluRay.x264.Hun-Made
A vérszomjas dada 1080p REMUX
Healing.Scars.2018.720p.AMZN.WEB-DL.DDP2.0.H.264-TEPES
Meteor.1979.BDRip.x264.HUN-GEO
Mama.Is.Boos.1986.DUTCH.1080p.WEB.h264-TRIPEL
Schatjes.1984.DUTCH.1080p.WEB.h264-TRIPEL
Like.Father.Like.Son.2013.BDRip.DD2.0.x264.HuN-BaKeR
Like.Father.Like.Son.2013.ReaD.NfO.720p.BluRay.DD2.0.x264.HuN-BaKeR
Dareka no Manazashi 1080p
Like.Father.Like.Son.2013.1080p.BluRay.DD2.0.x264.HuN-BaKeR
Like.Father.Like.Son.2013.1080p.BluRay.ReMuX.AvC.DD2.0.HuN-BaKeR
Viszontlatasra.a.pokolban.1970.BDRip.x264.Hun-eStone
Dennis.Rodman.a.Fereg.1998.WEBRIP.x264.HUN-Wolf
Veszedelmes Afrika - Mindent az utódokért 1080i
The.Parallax.View.1974.BDRip.x264.HUN-CRW
Horror.Noire.A.History.of.Black.Horror.2019.1080p.AMZN.WEB-DL.DDP2.0.H.264-NTG
The.Flu.That.Killed.50.Million.2018.TVRIP.x264.HUN-Wolf
A.Markak.Haboruja.2012.1080p.BluRay.x264.Hun-Pirosasz
Headwinds.2011.1080p.BluRay.x264.DD2.0.HuN-BaKeR
Headwinds.2011.720p.BluRay.x264.DD2.0.HuN-BaKeR
John.Carpenter.Vampirok.1998.BDRip.x264.Hun-eStone
Headwinds.2011.DVDRip.x264.HuN-BaKeR
Szerelmem.Szelleme.2000.WEBRIP.x264.HUN-Wolf
Patkanyfogo.1956.BDRip.x264.Hun-eStone
The.Parallax.View.1974.1080p.Remux.AVC.LPCM.1.0.HUN-CRW
Madarak 2160p UHD BluRay HDR
The.Grudge.2004.THEATRICAL.1080p.WEB.H264-FLAME
The.Grudge.2004.THEATRICAL.720p.WEB.H264-FLAME
The.Reef.2010.1080p.BluRay.x264.DTS.Hun-MrDeta
Zsaruk
Tévedések
Vatikán - a pápák időtlen városa
Dr.Goldfoot.es.a.lanybombak.1966.HUN.BDRip.x264-PTR
Dr.Goldfoot.es.a.lanybombak.1966.HUN.720p.BluRay.x264-PTR
Dr.Goldfoot.es.a.Bikini-gep.1965.HUN.BDRip.x264-PTR
Dr.Goldfoot.es.a.Bikini-gep.1965.HUN.720p.BluRay.x264-PTR
Dark.City.1998.1080p.Open.Matte.Directors.Cut.WEB-DL.DD5.1.x264.Hun-L77
Courting.Mom.and.Dad.2021.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO
The.Swordsman.2020.BluRay.1080p.DTS-HD.MA.5.1.x264-MTeam
Falka születik 720p
The.Legend.of.Fall.Creek.2021.1080p.WEB-DL.DD2.0.H.264-EVO
Sacrifice.2021.1080p.WEB-DL.DD5.1.H.264-EVO
PVT.CHAT.2021.1080p.WEB-DL.DD5.1.H.264-EVO
Expiry.2021.1080p.WEB-DL.DD2.0.H.264-EVO
Before.During.After.2020.1080p.WEB-DL.DD2.0.H.264-EVO
15.Killings.2021.1080p.WEB-DL.DD5.1.H.264-EVO
After.My.Death.2017.1080p.BluRay.x264-GiMCHi
Perfume.The.Story.Of.A.Murderer.2006.2160p.UHD.BluRay.DTS-HD.HR.5.1.HDR.x265.HuN-TRiNiTY
Special.Correspondents.2009.WEB-DLRip.x264.HUN-EKG
Heal 720p
Hatchet.2006.UnRaTeD.1080p.BluRay.x264.HuN-BaKeR
Hatchet.2006.UnRaTeD.BDRip.x264.HuN-BaKeR
Do.the.Right.Thing.1989.1080p.UHD.BluRay.DD+7.1.x264.HuN-TRiNiTY
A.Vigilante.2018.SPANiSH.1080p.WEB.h264-ENDURANCE
The.Killer.Elite.1975.1080p.BluRay.x264.Hun-TRT
The.Name.of.the.Game.2018.1080p.WEB.h264-OPUS
The.Good.Change.2018.720p.WEB.H264-FLAME
The.Good.Change.2018.WEB.H264-FLAME
Dobra.Zmiana.2018.POLISH.1080p.WEB.H264-FLAME
Szerelmem.Szelleme.2000.WEB-DL.1080p.H264.Hun-Pirosasz
The.Dead.Lands.2014.1080p.BluRay.DTS.x264.HuN-No1
Yakari.a.Spectacular.Journey.2020.720p.WEB-DL.DD2.0.x264.HuN-BaKeR
Kazaam.a.szellem.1996.HUN.BDRip.x264-PTR
Kazaam.a.szellem.1996.HUN.720p.BluRay.x264-PTR
Stephen.Kings.ES.1990.German.BluRay.1080p.DD2.0.x264.3xHUN-GuRF
The.Magic.Roundabout.2005.DVDRip.x264.DD.5.1.HUN-GEO
Udvari bolond BD50
Deliver.Us.From.Evil.2020.1080p.BluRay.x264.DD5.1-SbR
Tuzvonalban.1983.BluRay.1080p.x264.Hun-Pirosasz
Gyilkos hasonmás
Yakari.a.Spectacular.Journey.2020.WEBRip.DD2.0.x264.HuN-BaKeR
Hajsza.a.gyemantokert.1965.BDRip.x264.Hun-eStone
Un.divan.a.New.York.1996.1080p.AMZN.WEBRip.DD+2.0.x264.HuN-BAYLEE
Honest.Thief.2020.1080p.BluRay.REMUX.AVC.DTS-HD.MA.7.1.HUN.ENG-SFY
Honest.Thief.2020.1080p.BluRay.DDP7.1.x264.HUN-PTHD
Honest.Thief.2020.720p.BluRay.DD5.1.x264.HUN-PTHD
Honest.Thief.2020.BDRip.x264.HUN-SFY
India vad Karnatakája
Devyataya.2019.1080p.BDREMUX.RUS.DTS.HUN.H264.SirSzaal
A Bagnold család nyara
Enemies.Closer.2013.READ.NFO.HUN.PAL.DVDR-WB
Desperate.Hours.1990.RETAiL.HUN.PAL.DVDR-WB
American.Skin.2021.1080p.WEB-DL.DD5.1.H.264-EVO
Bunben.egve.1993.WEBRip.x264.Hun-eStone
Two.by.Two.Overboard.2021.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO
Running.Naked.2021.1080p.WEB-DL.DD2.0.H.264-EVO
About.Hope.2020.1080p.WEB-DL.DD5.1.H.264-EVO
Do.The.Right.Thing.1989.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY
Life.In.A.Day.2020.2021.1080p.WEB.h264-TRIPEL
Life.In.A.Day.2020.2021.720p.WEB.h264-TRIPEL
Falling.for.Vermont.2007.720p.WEB-DL.x264.HUN-EKG
Rosamunde.Pilcher.Kuste.der.Traume.2001.720p.WEB-DL.x264.HUN-EKG
Rosamunde.Pilcher.Vermachtnis.der.Liebe.2005.720p.WEB-DL.x264.HUN-EKG
A.Killer.Rising.2020.1080p.WEB.H264-NAISU
A.Killer.Rising.2020.720p.WEB.H264-NAISU
Paperback.Hero.1999.BDRip.x264.HUN-CRW
Piloci.2019.1080p.BluRay.x264-FLAME
The Night Is Short, Walk on Girl 1080p
Paperback.Hero.1999.1080p.Remux.AVC.FLAC.2.0.HUN-CRW
Piloci.2019.720p.BluRay.x264-FLAME
Piloci.2019.BDRip.x264-FLAME
Independence.Day.Resurgence.2016.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY
Meghasadva
A Pixar Story 1080p
Highway 720p
Blood.Sweat.and.Lies.2018.HUN.WEBRip.X264-HunTorrent
Room.at.the.Top.1959.DVDRip.x264.Hun-MrDeta
The.Forecaster.2014.1080p.WEB.h264-OPUS
Independence.Day.1996.EXTENDED.READ.NFO.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY
Bend.It.Like.Beckham.2002.BDRip.DD2.0.x264.HuN-BaKeR
Futás az életért
Felkavar.a.szel.2006.AMZN.WEBRip.x264.DD2.0.HUN-Menta
Legy.a.pasim.2017.AMZN.WEBRip.x264.DD2.0.HUN-Menta
Egyszer.Len.2015.AMZN.WEBRip.x264.DD2.0.HUN-Menta
Vörös cirokmező
Plein.soleil.1960.1080p.BluRay.FLAC1.0.x264.HuN-Apex
The.Arrested.Development.Documentary.Project.2013.1080p.WEB.h264-OPUS
The.Dead.Lands.2014.720p.BluRay.DD5.1.x264.HuN-No1
Halalcsok.1991.WEB-DL.1080p.x264.Hun-Pirosasz
Getting.Even.1986.HUN.NARRATOR.VHSRIP.READNFO.x264-X911
Still.A.Revolutionary.Albert.Einstein.2020.PROPER.1080p.WEBRip.x264-CBFM
The.Curse.of.Audrey.Earnshaw.2020.READ.NFO.1080p.BluRay.DDP5.1.x264.HUN-FULCRUM
The.Curse.of.Audrey.Earnshaw.2020.READ.NFO.720p.BluRay.DDP5.1.x264.HUN-FULCRUM
The.Curse.of.Audrey.Earnshaw.2020.READ.NFO.BDRip.x264.HUN-FULCRUM
Still.A.Revolutionary.Albert.Einstein.2020.PROPER.720p.WEBRip.x264-CBFM
Egy kis romantika
Crusoe.1988.WEBRip.x264.Hun-DOZSO
The.Hills.Have.Eyes.Part II.1984.HUNSUB.720p.BluRay.x264-TOXI
The.Hills.Have.Eyes.1977.HUN.NARRATOR.720p.BluRay.x264-TOXI
Noverek.2006.HUN.720p.WEB-DL.H.264-TOXI
Noverek.1972.2xHUN.720p.BluRay.x264-TOXI
Sínek a semmibe
Cooking.with.Love.2018.720p.WEB-DL.DD+5.1.H264.HuN-No1
Cooking.with.Love.2018.1080p.WEB-DL.DD+5.1.H264.HuN-No1
Crusoe.1988.1080p.AMZN.WEB-DL.H.264.HUN-DOZSO
ParaNorman
Best of Heti Hetes 1.
The.Ninth.2019.BDRip.x264.HuN-No1
The.Ninth.2019.720p.BluRay.DD5.1.x264.HuN-No1
The.Ninth.2019.1080p.BluRay.DD5.1.x264.HuN-No1
Shakuntala Devi 1080p
Bogan.Hunters.Bathurst.Conspiracy.2015.1080p.WEB.H264-CBFM
Bogan.Hunters.Bathurst.Conspiracy.2015.720p.WEB.H264-CBFM
Picture.Perfect.Royal.Christmas.2020.1080p.WEB.h264-WATCHER
Friday.the.13th.Part.3.1982.1080p.2D.BD25.AVC.DD2.0-HuN-Jak68
Love.and.Hip.Hop.Its.A.Love.Thing.2021.1080p.WEB.h264-BAE
Mediastan.2013.SUBBED.1080p.WEB.h264-OPUS
Sínek a semmibe 720p
Rém rom
Szörnyek az űrlények ellen
Remalmok.haza.1988.HUN.BDRip.x264-PTR
Blue.Mountain.State.The.Rise.of.Thadland.2016.GERMAN.DL.1080P.WEB.H264-WAYNE
Az ifjú Werther szenvedései
Fedőneve - Pipő
Detective.Story.1951.COMPLETE.RETAiL.HUNSUB.PAL.DVD5-ISO
Planet.Of.The.Humans.2019.1080p.WEB.h264-ASCENDANCE
Planet.Of.The.Humans.2019.720p.WEB.h264-ASCENDANCE
Flying.Objects.A.State.Secret.2020.1080p.WEB.h264-ASCENDANCE
Halj meg velem!
Out.Cold.2001.1080p.WEB-DL.x264.DD+5.1.Hun-MrDeta
Vad India - A dzsungel királyai 720p
Slaughter.2009.720p.BluRay.DD5.1.x264.HuN-No1
Az.Usher-haz.bukasa.1989.HUN.CUSTOM.BDRip.x264-PTR
Az.Usher-haz.bukasa.1989.HUN.CUSTOM.720p.BluRay.x264-PTR
Idétlen időkig 1080p REMUX
A.vilag.leggazdagabb.macskaja.1986.HUN.DVDRip.x264-TOXI
A.stopposok.reme.1989.HUN.DVDRip.x264-TOXI
Phoenix.Oregon.2020.1080p.WEB-DL.H264.AC3-EVO
Vad India - A dzsungel királyai 1080i
Cigányok ideje 1080p
Az utolsó Pápa
Cigányok ideje 720p
The.Good.Guy.2009.BDRip.x264.DD2.0.HuN-BaKeR
The.Good.Guy.2009.720p.BluRay.x264.DD2.0.HuN-BaKeR
The.Good.Guy.2009.1080p.BluRay.x264.DD2.0.HuN-BaKeR
Az utolsó Pápa 720p
Looker.1981.720p.BluRay.AAC2.0.x264.Hun-boOk
The.Bride.with.White.Hair.2.1993.iNTERNAL.BDRip.x264-MANiC
Punishment.Park.1971.iNTERNAL.BDRip.x264-MANiC
New.Fist.of.Fury.1976.iNTERNAL.BDRip.x264-MANiC
New.Fist.of.Fury.1976.iNTERNAL.1980.RE-EDIT.BDRip.x264-MANiC
Mr.Vampire.1985.iNTERNAL.BDRip.x264-MANiC
La.Marseillaise.1938.iNTERNAL.BDRip.x264-MANiC
His.Girl.Friday.1940.iNTERNAL.BDRip.x264-MANiC
Hard.Eight.1996.iNTERNAL.BDRip.x264-MANiC
Graduate.First.1978.iNTERNAL.BDRip.x264-MANiC
Bronson.2008.iNTERNAL.BDRip.x264-MANiC
The Wolf of Snow Hollow
Huliganok.2005.HUN.Open.Matte.1080p.BluRay.x264-PTR
Cam.Girls.2021.1080p.WEB-DL.DD5.1.H.264-EVO
Kinky.Boots.2005.BDRip.x264.HUN-CRW
Szenvedely.1969.WEB-DL.iTunes.1080p.H264.Hun-Pirosasz
Kinky.Boots.2005.1080p.Remux.AVC.DTS-HD.MA.5.1.HUN-CRW
aTypical.Wednesday.2020.720p.WEB.H264-NAISU
The.Monopoly.On.Violence.2020.720p.WEB.h264-ASCENDANCE
The.Monopoly.On.Violence.2020.1080p.WEB.h264-ASCENDANCE
Dont.Call.Me.Bigfoot.2020.1080p.WEB.h264-ASCENDANCE
Redeeming.Uncle.Tom.2019.720p.WEB.h264-ASCENDANCE
Alien.Contactee.2020.1080p.WEB.h264-ASCENDANCE
Rosamunde.Pilcher.Melodie.der.Herzen.1998.720p.WEB-DL.x264.HUN-EKG
Rosamunde.Pilcher.Flamme.der.Liebe.2003.720p.WEB-DL.x264.HUN-EKG
Summer.Villa.2016.720p.WEB-DL.x264.HUN-EKG
Rosamunde.Pilcher.Paradies.der.Traume.2003.720p.WEB-DL.x264.HUN-EKG
Rosamunde.Pilcher.Federn.im.Wind.2004.720p.WEB-DL.x264.HUN-EKG
Katie.Fforde.Das.Schweigen.der.Manner.2016.720p.WEB-DL.x264.HUN-EKG
The.Opening.Act.2020.BDRip.x264-iMPRiNT
The.Opening.Act.2020.1080p.BluRay.x264-MiMiC
The.Opening.Act.2020.720p.BluRay.x264-MiMiC
Sea.Gypsies.The.Far.Side.of.the.World.2017.1080p.WEB.h264-iNTENSO
Suzi.Q.2019.1080p.WEB.h264-iNTENSO
Ten.Little.Indians.1989.WEB.h264-iNTENSO
Petla.2020.1080p.BluRay.x264-FLAME
The.Edge.of.Love.2008.Limited.1080p.Bluray.X264-DIMENSION
Verratene.Freunde.2013.German.720p.HDTV.x264-muhHD
The.Scorpion.King.2002.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY
Petla.2020.720p.BluRay.x264-FLAME
Finding.Rin.Tin.Tin.2007.DVDRip.x264.HUN-GEO
Petla.2020.BDRip.x264-FLAME
The.Mummy.Returns.2001.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY
Nocturna.2007.BDRip.x264.DD.5.1.HUN-GEO
A névtelen harcos
Wendy.Williams.What.a.Mess.2021.720p.WEB.h264-BAE
Witching.and.Bitching.2013.RETAiL.HUN.PAL.DVDR-WB
Mulan.2020.CUSTOM.HUN.PAL.DVD9-WB
Mulan.2020.CUSTOM.HUN.PAL.DVDR-WB
Amateur.Night.2016.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY
Amateur.Night.2016.1080p.BluRay.DD.5.1.x264.HuN-TRiNiTY
Amateur.Night.2016.720p.BluRay.DD.5.1.x264.HuN-TRiNiTY
Amateur.Night.2016.BDRip.x264.HuN-TRiNiTY
Alien.predator.1986.HUN.720p.BluRay.x264-TOXI
Scary.Movie.2000.Open.Matte.AMZN.WEBRiP.x264.HuN-TRiNiTY
Future.Zone.1990.HUN.720p.BluRay.x264-TOXI
Future.Force.1989.HUN.720p.BluRay.x264-TOXI
Cyberjack.1995.HUN.1080p.WEB-DL.H.264-TOXI
Do.the.Right.Thing.1989.2160p.UHD.BluRay.REMUX.DTS-HD.MA.7.1.HDR.HEVC.HuN-TRiNiTY
Bulado.2020.1080p.BluRay.x264-HDEX
Bulado.2020.720p.BluRay.x264-HDEX
The.Dead.Pool.1988.PROPER.1080p.BluRay.x264-CULTHD
Run Hide Fight
Chino.1973.720p.BluRay.x264-GAZER
Richard.Jewell.2019.CUSTOM.HUN.PAL.DVD9-WB
Cocoon.2020.720p.BluRay.x264-ORBS
Cocoon.2020.1080p.BluRay.x264-ORBS
Richard.Jewell.2019.CUSTOM.HUN.PAL.DVDR-WB
Sleeping.Beauty.1959.BD50.AVC.DTSHD.7.1.HUN-TRiNiTY
Good bye, Lenin! 1080p REMUX
Palmer.2021.WEBRip.x264.HunSub-Romeoo
The.Gangster.the.Cop.the.Devil.2019.BDRip.x264-BiPOLAR
Rey.2017.BDRip.x264-BiPOLAR
My.Missing.Valentine.2020.BDRip.x264-BiPOLAR
Light.from.Light.2019.BDRip.x264-BiPOLAR
Bull.2019.DVDRip.x264-BiPOLAR
A.Distant.Neighbourhood.2010.BDRip.x264-BiPOLAR
Soft.Top.Hard.Shoulder.1992.1080p.BluRay.x264-BiPOLAR
Rey.2017.1080p.BluRay.x264-BiPOLAR
My.Missing.Valentine.2020.1080p.BluRay.x264-BiPOLAR
Exotic.2016.WEB.H264-13
Felemelkedés 720p
Joel.McHale.Live.from.Pyongyang.2019.1080p.WEB.h264-OPUS
General.Commander.2019.720p.BluRay.x264.DD2.0.HuN-BaKeR
General.Commander.2019.1080p.BluRay.x264.DD2.0.HuN-BaKeR
John Carpenter - Vámpírok BD50
General.Commander.2019.BDRip.x264.DD2.0.HuN-BaKeR
The.War.with.Grandpa.2020.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HUN-SFY
Crossroads.1986.1080p.Remux.AVC.DTS-HD.MA.2.0.HUN-CRW
The.War.with.Grandpa.2020.BDRip.x264.HUN-SFY
The.War.with.Grandpa.2020.1080p.BluRay.DDP5.1.x264.HUN-PTHD
The.War.with.Grandpa.2020.720p.BluRay.DD5.1.x264.HUN-PTHD
Cagefighter.2020.720p.BluRay.x264-UNVEiL
Cagefighter.2020.BDRip.x264-UNVEiL
Motherless.Brooklyn.2019.1080p.BluRay.REMUX.DTS-HD.MA.5.1.AVC.HUN-FULCRUM
Motherless.Brooklyn.2019.1080p.BluRay.DDP5.1.x264.HUN-FULCRUM
Motherless.Brooklyn.2019.720p.BluRay.DD5.1.x264.HUN-FULCRUM
Motherless.Brooklyn.2019.BDRip.x264.HUN-FULCRUM
Love.Lost.and.Found.2021.1080p.AMZN.WEB-DL.DD+5.1.H.264-iKA
Ace.Ventura.When.Nature.Calls.1995.720p.Open.Matte.WEB-DL.DD5.1.x264.Hun-L77
Crossroads.1986.BDRip.x264.HUN-CRW
The.Adventure.Of.A.R.I.My.Robot.Friend.2020.1080p.Bluray.DTS-HD.MA.5.1.X264-EVO
Jacob.Mimmi.and.the.Talking.Dogs.2019.1080p.BluRay.DD2.0.H264.HuN-No1
Jacob.Mimmi.and.the.Talking.Dogs.2019.WEBRip.x264.HuN-No1
Richard.Jewell.2019.1080p.BluRay.DTS.x264.HuN-No1
Richard.Jewell.2019.720p.BluRay.DD5.1.x264.HuN-No1
Richard.Jewell.2019.BDRip.x264.HuN-No1
Alice.1990.HDTV.1080i.MPEG-4.Hun-Pirosasz
Alice.1990.BluRay.720p.x264.Hun-Pirosasz
Lost.Boys.2020.FiNNiSH.1080p.WEB.H264-TOOSA
The.Midas.Touch.2020.720p.WEB.h264-WATCHER
Price.Of.Love.2020.720p.WEB.h264-WATCHER
Price.Of.Love.2020.1080p.WEB.h264-WATCHER
Locked.Inside.2020.720p.WEB.h264-WATCHER
Locked.Inside.2020.1080p.WEB.h264-WATCHER
Bigfoot.The.Conspiracy.2020.720p.WEB.h264-WATCHER
Alcatraz.Prison.Escape.Deathbed.Confession.1080p.WEB.h264-WATCHER
A Valentin-napi mészárlás 1080p
The.Man.Who.Walked.Around.the.World.2020.720p.WEB.h264-DOCiLE
The.Man.Who.Walked.Around.the.World.2020.WEB.h264-DOCiLE
Life.To.Afterlife.Death.And.Back.2019.1080p.WEB.h264-ASCENDANCE
Life.To.Afterlife.Death.And.Back.2019.720p.WEB.h264-ASCENDANCE
Engedetlen.2018.720p.FMIO.WEB-DL.AAC2.0.H.264.HUN-FULCRUM
Metro.Im.Netz.des.Todes.2013.German.DL.1080p.BluRay.AVC-SAViOURHD
Salem.Witch.Trials.2002.PART2.PROPER.RERiP.1080p.BluRay.x264-SADPANDA
Maceras.ugyek.2001.FMIO.WEBRip.x264.HUN-FULCRUM
Cinema Paradiso 1080p REMUX
The.Evil.Twin.2021.720p.WEB.h264-BAE
Az Alhambra jóslata
Always.2011.1080p.BluRay.x264-REGRET
Heiraten.ist.nichts.fuer.Feiglinge.2015.German.720p.Webrip.x264-TVARCHiV
Heiraten.ist.nichts.fuer.Feiglinge.2015.German.1080p.Webrip.x264-TVARCHiV
Crossroads.A.Story.of.Forgiveness.2007.DVDRip.x264.HUN-GEO
Szokevenyvonat.1985.RETAIL.HUN.PAL.DVD9-TRASH
Andrey.Rublev.1966.Original.Cut.SUBBED.1080p.BluRay.x264-VALiS
The.Reading.Room.2005.DVDRip.x264.HUN-GEO
Mord.am.Meer.2005.German.Webrip.x264-TVARCHiV
Turist.2014.720p.BluRay.DTS.x264.HuN-TRiNiTY
Turist.2014.1080p.BluRay.DTS.x264.HuN-TRiNiTY
K .O. - A kiütés
10.Rules.for.Falling.in.Love.2012.DVDRip.x264.HUN-GEO
Battle.Los.Angeles.2011.Open.Matte.720p.STZ.WEB-DL.DTS.x264-Hun-L77
Road.House.1989.REMASTERED.1080p.BluRay.x264.Hun-Made
Vipera.akcio.1988.HUN.DVDRip.x264-TOXI
Ravage.2019.AMZN.WEBRip.HunSub.x264-RolandS
Felemelkedés 1080i
Veszelyes.terep.1986.HUN.DVDRip.x264-TOXI
Veres.penz.1991.HUN.DVDRip.x264-TOXI
Vegso.leszamolas.1989.HUN.DVDRip.x264-TOXI
A.funyiroember.1992.2xHUN.720p.BluRay.x264-TOXI
A fenevad gyomrában
A.felelem.orai.1990.RETAIL.HUN.PAL.DVD9-TRASH
On the Line - The Race of Champions 1080p
Száz nap Palermóban 1080i
Mission.Impossible.1996.1080p.UHD.BluRay.DD+5.1.x264.HuN-TRiNiTY
Breakfast.on.Pluto.2005.1080p.AMZN.WEB-DL.x264.DD+5.1.Hun-MrDeta
Home.Alone.1990.READ.NFO.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY
De-Lovely - Ragyogó évek 1080i
Grace.Unplugged.2013.1080p.BluRay.x264.DD2.0.HuN-BaKeR
Penguins.Life.on.the.Edge.2020.720p.WEB.h264-KOGi
Árnyék nélkül 2
In.the.Footsteps.of.Elephant.2020.720p.WEB.h264-KOGi
Clouds.2020.1080p.WEB.h264-KOGi
Marvel.Studios.Expanding.the.Universe.2019.720p.WEB.h264-KOGi
Marvel.Studios.Expanding.the.Universe.2019.1080p.WEB.h264-KOGi
Diving.with.Dolphins.2020.720p.WEB.h264-KOGi
Snitch.2013.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY
A.Celebration.Of.The.Music.From.Coco.2020.1080p.WEB.h264-KOGi
A.Celebration.Of.The.Music.From.Coco.2020.720p.WEB.h264-KOGi
Angel.Heart.1987.1080p.UHD.BluRay.DD+5.1.HDR.x265.HuN-TRiNiTY
K .O. - A kiütés 720p
Segítség, felnőttem! 1080p REMUX
A múlt vétkei
The.Good.Heart.2009.720p.BluRay.DD5.1.x264.Hun-ARROW
Reggeli a Plútón 1080p
Grace.Unplugged.2013.BDRip.x264.HuN-BaKeR
The.Eiger.Sanction.1975.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY
K .O. - A kiütés 1080i
Mostohaapa 1080p
Balhé Bronxban 1080p
Flight.of.the.Navigator.1986.REMASTERED.1080p.BluRay.Remux.AVC.DTS.Hun-MrDeta
A sárkány viadala 1080p
Wreck.2020.1080p.AMZN.WEB-DL.DDP2.0.H.264-Meakes
Easy.to.Learn.Hard.to.Master.The.Fate.of.Atari.2017.WEB.H264-13
Nintendo.Quest.2015.WEB.H264-13
Fél-profi 1080p REMUX
Knives.Out.2019.READ.NFO.CUSTOM.HUN.PAL.DVD9-WB
Alabama.Snake.2020.WeBRiP.x264.HuNSuB-BAYLEE
American.Kamasutra.2018.720p.Web-DL.x264-GEO
The.Indian.Runner.1991.CUSTOM.HUN.PAL.DVD9-WB
Godzilla.1998.2160p.UHD.BluRay.DD+7.1.HDR.x265.HuN-TRiNiTY
The.Indian.Runner.1991.CUSTOM.HUN.PAL.DVDR-WB
Gondoskodom rólad 720p
A.Fenevad.2007.BluRay.1080p.x264.Hun-Pirosasz
Csak egy harapás
Space.Station.76.2014.RETAiL.HUN.PAL.DVD9-ISO
The.Reading.Room.2005.1080p.AMZN.WEB-DL.DDP2.0.H.264.HuN-HaNTaH
Behind.Enemy.Lines.1986.BDRiP.x264-GUACAMOLE
Kill.The.City.2.2020.DVDRip.x264-AEROHOLiCS
Archive.2020.720p.BluRay.x264-PFa
Maci Laci karácsonya, avagy sztárok a fenyő alatt 1080p
A király látogatása
Bombshell.2019.READ.NFO.1080p.BluRay.DD5.1.x264.HuN-prldm
Bombshell.2019.READ.NFO.720p.BluRay.DD5.1.x264.HuN-prldm
Bombshell.2019.READ.NFO.BDRip.x264.HuN-prldm
Willow.1988.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.Hun-MrDeta
Sound.of.Metal.2020.1080p.AMZN.WEB-DL.DDP5.1.H.264-CMRG
1917.2019.READ.NFO.1080p.BluRay.DDP7.1.x264.HuN-prldm
1917.2019.READ.NFO.720p.BluRay.DD5.1.x264.HuN-prldm
1917.2019.READ.NFO.BDRip.x264.HuN-prldm
Big.Time.Adolescence.2019.WeBRiP.x264.HuNSuB-BAYLEE
Az asztronauta
Dark.Waters.2019.READ.NFO.1080p.BluRay.DDP5.1.x264.HuN-prldm
Dark.Waters.2019.READ.NFO.720p.BluRay.DD5.1.x264.HuN-prldm
Dark.Waters.2019.READ.NFO.BDRip.x264.HuN-prldm
Sidewalks of New York 1080p
Clue.1985.CUSTOM.HUN.PAL.DVDR-WB
Doom.2005.UNRATED.EXTENDED.CUT.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Nyero.testek.1984.HUN.DVDRip.x264-TOXI
Showdown.in.Manila.2016.HUNSUB.720p.BluRay.x264-TOXI
Donto.osszecsapas.1993.HUN.1080p.BluRay.x264-TOXI
Never.Surrender.A.Galaxy.Quest.Documentary.2019.720p.WEB.h264-OPUS
Never.Surrender.A.Galaxy.Quest.Documentary.2019.1080p.WEB.264-OPUS
Mohó kopó, okos lopó 1080p
Lovatett.Lovagok.2000.1080p.AMZN.WEB-DL.x264.Hun-Pirosasz
Blackthorn.2011.1080p.Blu-ray.Remux.AVC.DTS-HD.MA.5.1 - KRaLiMaRKo
Core.Striking.Combinations.And.Tricky.Attacks.by.Firas.Zahabi.720p.WEB-DL.x264-ZED
The.Craft.Legacy.2020.1080p.BluRay.DTS-HD.X264-CMRG
Worlds.of.Ursula.K.Le.Guin.2018.720p.WEBRip.X264-iPlayerTV
Holtunkiglan.1999.720p.BluRay.x264.Hun-Pirosasz
Holtunkiglan.1999.1080p.BluRay.x264.Hun-Pirosasz
License.to.Drive.1988.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.Hun-MrDeta
Infidel.2019.BDRip.x264-CAVIEZEL
Beyond.the.Woods.2020.1080p.WEB-DL.DD2.0.H.264-EVO
Paint.2020.1080p.WEB-DL.DD5.1.H.264-EVO
The.Curse.of.Hobbes.House.2020.1080p.WEB-DL.DD5.1.H.264-EVO
Finding.Jack.Charlton.2020.BDRip.x264-ORBS
The.Rodeo.Thief.2021.1080p.WEB-DL.AAC2.0.x264-EVO
Sky.Sharks.2020.1080p.Bluray.DTS-HD.HR.7.1.X264-EVO
Cowboy.Strong.Building.Functional.Power.by.Gary.Calcagno.720p.WEB-DL.x264-ZED
Radium.Girls.2020.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO
The.Prestige.2006.1080p.UHD.BluRay.DD+5.1.x264.HuN-TRiNiTY
Clifton.Hill.2019.1080p.WEB-DL.DD+5.1.H264.HuN-No1
Clifton.Hill.2019.720p.WEB-DL.DD+5.1.H264.HuN-No1
Follow.Me.2020.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.Hun-MrDeta
Clifton.Hill.2019.WEBRip.x264.HuN-No1
Inga.Lindstrom.Merre.Keresselek.WEB-DLRip.x264.HUN-EKG
Decemberi.Menyasszony.WEB-DLRip.x264.HUN-EKG
Escape.From.Pretoria.2020.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.Hun-MrDeta
Greenland.2020.COMPLETE.UHD.BLURAY-B0MBARDiERS
Hol az igazság
The.Godfather.Coda.The.Death.of.Michael.Corleone.2020.REMASTERED.720p.BluRay.DD5.1.x264.
Caniba.2017.BDRip.x264-BiPOLAR
Angele.1934.BDRip.x264-BiPOLAR
High.Society.1956.720p.HDTV.x264-REGRET
Doom.2005.UNRATED.EXTENDED.BDRip.x264.DD.5.1.HUN-GEO
No.Gi.Power.Passing.by.Matheus.Diniz.720p.WEB-DL.x264-ZED
Minden, amit tudni akartál az elviteles ételről
Mohó kopó, okos lopó 720p
Holiday.Inn.1942.1080p.BluRay.x264.Hun-TRT
The.Roads.Not.Taken.2020.1080p.WEB-DL.H264.AC3-EVO
Faust.Love.of.the.Damned.2000.BDRIP.X264.INTERNAL-WATCHABLE
The.De.La.Riva.System.Part1.The.Foundation.by.Mikey.Musumeci.720p.WEB-DL.x264-SZLS
Tom.and.Jerry.Meet.Sherlock.Holmes.2010.1080p.BluRay.REMUX.VC1.DD5.1.HuN-TRiNiTY
Robo 1080p
Holly.Woody.tortenet.2002.COMPLETE.RETAIL.HUN.PAL.DVD5-TRASH
Oblivion.2013.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY
Aviva.2020.1080p.WEB-DL.DD5.1.H.264-EVO
Paintball.Massacre.2020.1080p.WEB-DL.DD5.1.H.264-EVO
The.Kid.Detective.2020.1080p.WEB-DL.DD5.1.H.264-EVO
Urban.Explorer.2011.1080p.BluRay.x264.Hunsub-Pirosasz
The.Closet.2020.1080p.WEB-DL.DD2.0.H.264-EVO
The.Lucky.One.2012.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY
Lupin.III.The.First.2020.1080p.WEB-DL.DD2.0.H.264-EVO
Army.of.One.2020.1080p.WEB-DL.AAC2.0.H.264-EVO
Scalps.1983.DVDRip.x264.Hunsub-Pirosasz
Mangue.Negro.2008.DVDRip.x264.Hunsub-Pirosasz
Brokeback.Mountain.2005.1080p.BluRay.REMUX.VC1.DTS-HD.MA.5.1.HuN-TRiNiTY
Black.Water.Abyss.2020.BDRip.x264-WaLMaRT
The.Wretched.2019.COMPLETE.DVDR-JFKDVD
The.Outpost.2020.DVDR-JFKDVD
The.First.Deadly.Sin.1980.1080p.AMZN.WEB-DL.H.264.Hun-DOZSO
Cujo.1983.READ.NFO.1080p.BluRay.DTS.x264.HuN-Apex
BLACKPINK.Light.Up.the.Sky.2020.720p.NF.WEB-DL.DDP5.1.x264-LAZY
Back.to.the.Future.Part.III.1990.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY
BLACKPINK.Light.Up.the.Sky.2020.NF.WEB-DL.DD5.1.x264-LAZY
High.Life.2018.READ.NFO.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-No1
High.Life.2018.READ.NFO.1080p.BluRay.DD+5.1.x264.HuN-No1
Dont.Kill.It.2016.CUSTOM.HUN.PAL.DVDR-WB
Hulk - Ahol a szörnyek lakoznak 1080p
Orult.kuldetes.4.1986.HUN.READNFO.720p.BluRay.x264-TOXI
Orult.kuldetes.3.1984.HUN.READNFO.720p.BluRay.x264-TOXI
Back.to.the.Future.Part.II.1989.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY
Orult.kuldetes.2.1983.HUN.READNFO.720p.BluRay.x264-TOXI
Orult.kuldetes.1.1982.HUN.READNFO.720p.BluRay.x264-TOXI
The.Assignment.2016.BDRip.x264.HuN-BAYLEE
Helen 720p
Hubie.Halloween.2020.CUSTOM.HUN.PAL.DVDR-WB
Brahms.The.Boy.II.2020.CUSTOM.HUN.PAL.DVDR-WB
High.Life.2018.READ.NFO.720p.BluRay.DD5.1.x264.HuN-No1
High.Life.2018.READ.NFO.BDRip.x264.HuN-No1
Dolly Kitty és a fénylő csillagok 1080p
Anunnaki.2017.HDTV.x264-GEO
Anunnaki.2017.1080p.HDTV.x264-GEO
Sing.2016.2160p.BluRay.REMUX.HEVC.TrueHD.7.1.Atmos-HUN-UFO971
The.Scorpion.King.2002.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Treasure.Island.1990.480p.AMZN.WEBrip.DDP2.0.x264.2xHun-DenZo
Treasure.Island.1990.720p.AMZN.WEBrip.DDP2.0.x264.2xHun-DenZo
Treasure.Island.1990.1080p.AMZN.WEB-DL.DDP2.0.H264.2xHun-DenZo
Du.Cote.d.Orouet.1971.DVDRip.x264-BiPOLAR
Ramrod.1947.BDRip.x264-BiPOLAR
The.Garden.1995.DVDRip.x264-BiPOLAR
Blue.Jeans.1958.DVDRip.x264-BiPOLAR
The.Black.Report.1963.BDRip.x264-BiPOLAR
Black.Test.Car.1962.720p.BluRay.x264-BiPOLAR
What.Moves.Me.1989.720p.BluRay.x264-BiPOLAR
Time.of.the.Wolf.2003.720p.BluRay.x264-PHOBOS
Gags.The.Clown.2018.1080p.WEB-DL.H264.Hunsub-Pirosasz
Back.to.the.Future.1985.2160p.UHD.BluRay.TrueHD.7.1.HDR.x265.HuN-TRiNiTY
The.Assignment.2016.720p.BluRay.DD5.1.x264.HuN-No1
The.Assignment.2016.1080p.BluRay.DTS.x264.HuN-No1
Pierrot.le.Fou.1965.1080p.Remux.AVC.LPCM.1.0.HUN-CRW
Arat a szerelem
Alice.etterme.1969.BDRip.x264.2xHun-eStone
Meatball.Machine.2005.DVDRip.x264.Hunsub-Pirosasz
The.Princess.Switch.2018.1080p.NF.WEB-DL.DDP5.1.H.264.HUN.ENG-SFY
The.Princess.Switch.2018.720p.NF.WEB-DL.DDP5.1.H.264.HUN.ENG-SFY
The.Princess.Switch.2018.NF.WEBRip.x264.HUN-SFY
Johnny.English.Strikes.Again.2018.1080p.UHD.BluRay.DTS.HDR.x265.HuN-TRiNiTY
Days.of.Thunder.1990.1080p.UHD.BluRay.DD+5.1.HDR.x265.HuN-TRiNiTY
Old.37.2015.WEB-DL.720p.H264.Hunsub-Pirosasz
A.tanu.1969.UNCENSORED.Hybrid.HDTV.x264.Hun-boOk
A.tanu.1969.UNCENSORED.Hybrid.720p.HDTV.AAC2.0.x264.Hun-boOk
A.tanu.1969.UNCENSORED.Hybrid.1080p.HDTV.AAC2.0.x264.Hun-boOk
Simlis.Taxisok.1983.HDTV.1080i.MPEG-2.Hun-Pirosasz
Secrets.of.Shaolin.with.Jason Scott.Lee.2012.docu.1080p.bluray.x264-pussyfoot
Swallow.2019.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-No1
A.Summer.Romance.2019.1080p.WEB-DL.DD+5.1.H264.HuN-No1
A.Summer.Romance.2019.720p.WEB-DL.DD+5.1.H264.HuN-No1
Back.to.the.Future.Part.III.1990.2160p.UHD.BluRay.REMUX.TrueHD.Atmos.7.1.HDR10+.HEVC.HuN-TRiNiTY
Liliom ösvény 1080p
Swallow.2019.1080p.BluRay.DD+5.1.x264.HuN-No1
Swallow.2019.720p.BluRay.DD5.1.x264.HuN-No1
Swallow.2019.BDRip.x264.HuN-No1
Corpus Christi 1080p
The.King.of.Staten.Island.2020.DVDR-JFKDVD
The.High.Note.2020.DVDR-JFKDVD
A Cincinnati kölyök 1080p REMUX
The.Burnt.Orange.Heresy.2019.DVDR-JFKDVD
Amerikai.kiborg.1993.2xHUN.720p.BluRay.x264-TOXI
Ki.vagy.doki.1996.HUN.720p.BluRay.x264-TOXI
Scary.Bride.2020.1080p.WEB-DL.DD5.1.H.264-EVO
Pierrot.le.Fou.1965.BDRip.x264.HUN-CRW
Mothers.of.the.Bride.2015.WEBRiP.DD2.0.x264.Hun-ARROW
Mothers.of.the.Bride.2015.1080p.AMZN.WEB-DL.DDP5.1.H.264.Hun-ARROW
Birds.of.Prey.And.the.Fantabulous.Emancipation.of.One.Harley.Quinn.2020.2160p.UHD.REMUX.DV.DL.DTS-HD
Evil.Eye.2020.1080p.AMZN.WEB-DL.DDP5.1.H264-EVO
Back.to.the.Future.Part.II.1989.2160p.UHD.BluRay.REMUX.TrueHD.Atmos.7.1.HDR10+.HEVC.HuN-TRiNiTY
Nocturne.2020.1080p.AMZN.WEB-DL.DDP5.1.H.264-EVO
Save Yourselves.2020.1080p.Bluray.DTS-HD.MA.5.1.X264-EVO
Rossz.Hold.1996.BDRemux.1080p.AVC.Hun-Pirosasz
Batman.Death.in.the.Family.2020.1080p.Bluray.X264-EVO
Totally.Under.Control.2020.1080p.WEB-DL.DD5.1.H.264-EVO
Monster.Force.Zero.2020.1080p.WEB-DL.DD2.0.H.264-EVO
The.Wall.of.Mexico.2020.1080p.WEB-DL.DD5.1.H.264-EVO
Die.Goldfische.2019.1080p.BluRay.DD5.1.x264.Hun-ARROW
Tremors.Shrieker.Island.2020.1080p.BluRay.DTS-HD.X264-CMRG
Die.Goldfische.2019.720p.BluRay.DD5.1.x264.Hun-ARROW
Bűn és bűnhődés
Ujra.Nyeregben.A.Het.Mesterlovesz.1972.BluRay.1080p.x264.Hun-Pirosasz
Jason.Bourne.2016.2160p.UHD.BluRay.DTS-HD.MA.7.1.HDR.x265.HuN-TRiNiTY
Fekete.szivarvany.1989.BDRip.x264.Hun-eStone
Adventureland.2009.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Runaway.Jury.2003.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-TRiNiTY
The.Poison.Rose.2019.1080p.BluRay.Remux.AVC.TrueHD.5.1.HUN-GS88
The.Poison.Rose.2019.1080p.BluRay.DD5.1.x264.HUN-GS88
Adrenalin
Dreamer.Inspired.by.a.True.Story.2005.1080p.AMZN.WEB-DL.DDP5.1.H.264.HuN-HaNTaH
Spartacus.1960.2160p.UHD.BluRay.REMUX.DTS-HD.MA.7.1.HDR.HEVC.HuN-TRiNiTY
National Theatre Live - Medea 1080p
Wheels.on.Meals.1984.REMASTERED.1080p.BluRay.x264.2xHun-TRT
Yip.Man.4.2019.PROPER.BDRiP.x264.HUN-Legacy
Spacehunter.1983.Custom.HUN.MPEG-2.1080p.BluRay.REMUX-Janus
Sharks.vs.Dolphins-Blood.Battle.2020.WEB.h264-CAFFEiNE
The.Barge.People.2018.720p.BluRay.x264-x0r
John.Wick.Chapter.2.2017.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY
John.Wick.2014.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY
Guest.Artist.2020.1080p.WEB-DL.H264.AC3-EVO
White.Lie.2020.1080p.WEB-DL.H264.AC3-EVO
Guest.Of.Honour.2020.1080p.WEB-DL.H264.AC3-EVO
Wrong.Cops.2013.720p.BluRay.x264-x0r
Rad.1986.720p.BluRay.x264-x0r
Sugar.Hill.1993.720p.BluRay.x264-x0r
Spy.Cat.2018.FLEMISH.DVDRip.x264-BARGAiN
A.Panamai.Szabo.2001.BluRay.720p.x264.Hun-Pirosasz
The Great Space War 720p
Crumb 720p
The.City.Without.Jews.1924.SUBFRENCH.720p.BluRay.x264-THREESOME
Gundala.2019.720p.BluRay.x264-x0r
Bringing Down a Dictator
The.City.Without.Jews.1924.SUBFRENCH.1080p.BluRay.x264-THREESOME
Ostwind.3.Aufbruch.nach.Ora.2017.720p.BluRay.DD5.1.x264.Hun-ARROW
Ostwind.3.Aufbruch.nach.Ora.2017.BDRiP.DD2.0.x264.Hun-ARROW
Inferno.A.bunos.varos.1999.COMPLETE.RETAIL.HUN.PAL.DVD5-TRASH
Kek.Melyseg.2003.BluRay.720p.x264.Hun-Pirosasz
Ada-t polgármesternek!
A jó pápa - XXIII. János
Wheels.on.Meals.1984.REMASTERED.720p.BluRay.x264-USURY
The.Highwaymen.2019.WEBRip.x264.Hunsub-eStone
Red.Heat.1988.1080p.UHD.BluRay.DD+5.1.HDR.x265.HuN-TRiNiTY
Red.Heat.1988.720p.REMASTERED.BluRay.DD5.1.x264.HuN-TRiNiTY
Rampage.2018.UHD.BluRay.2160p.REMUX.Dolby.Vision.SL.TrueHD.Atmos.7.1.HEVC.HUN-TRiNiTY
The.Hunger.Games.Mockingjay.Part.2.2015.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY
The.Hunger.Games.Mockingjay.Part.1.2014.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY
The.Hunger.Games.Catching.Fire.2013.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY
The.Hunger.Games.2012.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY
Superman.Batman.Public.Enemies.2009.CUSTOM.MULTi.1080p.BluRay.x264-D4KiD
Pay Day 1080p
American.Fighter.2020.1080p.WEBRip.X264.DD.5.1-EVO
Open.24.Hours.2020.720p.WEBRip.X264.AC3-EVO
Open.24.Hours.2020.1080p.WEBRip.X264.DD.5.1-EVO
One.Way.To.Denmark.2020.1080p.WEBRip.X264.DD.5.1-EVO
One.Way.To.Denmark.2020.720p.WEBRip.X264.AC3-EVO
A Nice Girl Like You
Open.24.Hours.2020.1080p.WEB-DL.H264.AC3-EVO
One.Way.To.Denmark.2020.1080p.WEB-DL.H264.AC3-EVO
Vörös zsaru BD50
Calcutta.1946.720p.BluRay.x264-x0r
RoboCop.2.1990.720p.BluRay.x264-x0r
The.Big.Sick.2017.1080p.BluRay.DD5.1.x264.HuN-prldm
The.Big.Sick.2017.720p.BluRay.DD5.1.x264.HuN-prldm
The.Big.Sick.2017.BDRip.x264.HuN-prldm
End.of.Sentence.2019.720p.BluRay.DD5.1.x264-iFT
Every Secret Thing 720p
Hotel Plaza 1080i
The.Very.Excellent.Mr.Dundee.2020.720p.AMZN.WEBRip.DDP5.1.X.264-EVO
The.Very.Excellent.Mr.Dundee.2020.1080p.AMZN.WEB-DL.DDP5.1.H.264-EVO
Jimmy O. Yang - Good Deal
Holky.z.porcelanu.1974.720p.HDTV.x264-DON
Indianske.leto.1995.720p.HDTV.x264-DON
Katie Fforde - Kilátás a tengerre 720p
Magyarok 1080i
Resistance.2020.720p.BluRay.DD5.1.x264-iFT
Tukrom.Tukrom.1996.WEB-DL.1080p.x264.Hun-Pirosasz
Dosed.2016.WEB.h264-RedBlade
Captain.Underpants.The.First.Epic.Movie.2017.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY
Resistance.2020.1080p.BluRay.DTS.x264-iFT
T2.Trainspotting.2017.2160p.UHD.HDR.BluRay.TrueHD.7.1.x265.HuN-TRiNiTY
The.Texas.Chainsaw.Massacre.The.Beginning.2006.1080p.CUSTOM.USA.BD25.AVC.DD.5.1-HuN-Jak68
Yvonne.Orji.Momma.I.Made.It.2020.WEB.h264-NiXON
Perfect.Drug.2012.BDRip.x264-BARGAiN
Michelle.Wolf.Nice.Lady.2017.WEB.h264-NiXON
George.Lopez.The.Wall.Live.from.Washington.D.C.2017.WEB.h264-NiXON
Ready.Player.One.2018.2160p.UHD.BluRay.TrueHD7.1.HDR.x265.HuN-SnyderHD
A.Jackson.megyei.borton.1976.HUN.1080i.HDTV.x264-TOXI
Idegenek.kozott.1974.HUN.READNFO.1080i.HDTV.x264-TOXI
Az.eroszak.eve.1991.HUN.READNFO.720p.WEB-DL.x264-TOXI
A.Tokeletes.harcos.2008.HUN.720p.BluRay.x264-TOXI
Szuperexpressz.1975.HUN.READNFO.720p.BluRay.x264-TOXI
Feeling.Minnesota.1996.1080p.AMZN.WEB-DL.DDP5.1.H.264.HuN-HaNTaH
Dreamgirls.2006.READ.NFO.1080p.BluRay.DD5.1.x264.HuN-Apex
Bad.Boys.for.Life.2020.CUSTOM.HUN.PAL.DVD9-WB
Azooma 720P
Esther.Povitsky.Hot.For.My.Name.2020.HDTV.x264-YesTV
The.Day.the.Earth.Caught.Fire.1961.720p.BluRay.AAC1.0.x264-EbP
Gyujtohatas.1992.WEB-DL.1080p.x264.Hun-Pirosasz
Red.Dust.1990.1080p.BluRay.x264-BiPOLAR
Borderland.2007.RETAiL.HUN.PAL.DVDR-WB
The.Matrix.Revolutions.2003.REPACK.UHD.BluRay.2160p.REMUX.Dolby.Vision.SL.TrueHD.7.1.Atmos.HEVC.HUN-
A játék ördöge 1080p
The Report
Kain.gyermekei.2014.720p.HBO.WEB-DL.AAC2.0.H.264-pcroland
Kain.gyermekei.2014.480p.HBO.WEBRip.AAC2.0.x264-pcroland
A.bosszu.nyomai.2019.720p.BluRay.x264.DD2.0.HuN-BaKeR
Halloween.2018.1080p.BluRay.REMUX.AVC.DTS-HD.MA.7.1.Hun-MrDeta
The.Jacket.2005.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-SmT
Hunyady.Sandor.Feketeszaru.cseresznye.2019.1080i.HDTV.x264.HUN-14V1
Joy.Ride.2.Dead.Ahead.2008.1080p.BluRay.Remux.AVC.DTS-HD.MA.5.1.HuN-SmT
Joy.Ride.2.Dead.Ahead.2008.BDRip.x264.HuN-SmT
Cápák lázadása
Cápák lázadása 1080i
Cube.Zero.2004.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.Hun-MrDeta
Earthquake.Bird.2019.720p.NF.WEB-DL.DDP5.1.x264-NTG
Earthquake.Bird.2019.1080p.NF.WEB-DL.DDP5.1.Atmos.H264-CMRG
Pisztolymuvesz.1988.HUN.720p.BluRay.x264-TOXI
The.Far.Country.1954.BDRip.x264.HUN-CRW
Once.Upon.a.Holiday.2015.1080p.NF.WEB-DL.DDP5.1.x264.HUN-POGGERS
Once.Upon.a.Holiday.2015.720p.NF.WEB-DL.DDP5.1.x264.HUN-POGGERS
Once.Upon.a.Holiday.2015.CUSTOM.WEBRip.x264.HUN-POGGERS
Varda.by.Agnes.2019.BDRip.x264-GHOULS
Starship.Troopers.3.Marauder.2008.1080p.EUR.BluRay.AVC.TrueHD.5.1-Razzau
American Graffiti 2. BDRip
The.Blob.1988.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.Hun-MrDeta
A.Good.Woman.2004.1080p.AMZN.WEB-DL.DD+5.1.H264.HuN-TRiNiTY
Fun.with.Dick.and.Jane.2005.1080p.AMZN.WEB-DL.DD+5.1.H264.HuN-TRiNiTY
Catacombs.2007.1080p.AMZN.WEB-DL.DD+2.0.H264.HuN-TRiNiTY
The.Princess.and.the.Dragon.2018.WEBRip.x264.HuN-No1
Dominion.Prequel.To.The.Exorcist.2005.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Baby.Baby.Baby.2015.1080p.AMZN.WEB-DL.DD+5.1.H264.HuN-TRiNiTY
A.Royal.Christmas.Ball.2017.HUN.WEBRiP.x264-ARROW
Hell.Night.1981.DVDRip.x264.Hunsub-Pirosasz
Night.Of.The.Lepus.1972.DVDRip.x264.Hunsub-Pirosasz
A.Royal.Christmas.Ball.2017.HUN.1080p.AMZN.WEB-DL.DDP5.1.H264-ARROW
The.Smell.Of.Us.2014.1080p.BluRay.x264.DD5.1.Hun-MrDeta
A bika tüze
A csendmadár
The.Perfect.Weapon.1991.1080p.BluRay.REMUX.AVC.DTS-HD.MA.2.0.Hun-MrDeta
Visszaszámlálás - A berlini fal felemelkedése és bukása
Bad.Blood.1994.DVDRip.DD2.0.x264.HUN-GuRF
Nyakas kakas
Goblin
Túl a gyászon 720p
Shutter.Island.2010.RETAiL.HUN.PAL.DVD9-ISO
Resident.Evil.Apocalypse.2004.REMUX.1080p.Blu-ray.MPEG-2.LPCM.5.1.Hun-Fodyna
Amelia 2.0
The.Devils.Double.2011.1080p.Bluray.Remux.AVC.DTS-HD.MA.7.1.HUN-KuNgZi
Paul.Blart.Mall.Cops.2.2015.REMUX.1080p.Blu-ray.DTS-HD.MA.5.1.AVC.HuN-HyperX
Ellenségből testvérek
Sivatagi Vihar - A hazugság háborúja
Churchill és a háborús döntések
Tuck.Everlasting.2002.HUN.WEBRiP.x264-ARROW
Drágán add az életed!
Ne nézz vissza!
My.Adventures.With.Santa.2019.DVDRip.x264-FRAGMENT
How.to.Train.Your.Dragon.2010.3D.BD25.MVC.TrueHD.7.1.HUN-HDPhoenix
The.Glory.Guys.1965.BDRip.x264.HUN-CRW
Dont.Let.Go.2019.BDRip.x264-AAA
Hercules.2014.RETAiL.HUN.PAL.DVD9-ISO
The.Land.Before.Time.IV.Journey.Through.the.Mists.1996.1080p.AMZN.WEB-DL.x264.DD+2.0.Hun-MrDeta
The.Glory.Guys.1965.1080p.Remux.AVC.DTS.MA.2.0.HUN-CRW
House.Arrest.2019.1080p.NF.WEB-DL.HIN-Multi.ATMOS.5.1-DD+5.1.x264-Telly
The.Salton.Sea.2002.720p.AMZN.WEB-DL.DD+5.1..x264.Hun-L77
Orok.tel.2018.HUN.WEBRiP.x264-ARROW
Disappearances.2006.1080p.BluRay.REMUX.AVC.DD.5.1.HuN-BecK's
One.Way.2006.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-BecK's
The.Taking.of.Tiger.Mountain.2014.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-BecK's
On.Golden.Pond.1981.1080p.BluRay.REMUX.AVC.DTS-HD.MA.2.0.HuN-BecK's
On.Golden.Pond.1981.1080p.BluRay.DD2.0.x264.HuN-BecK's
Klaus.2019.NF.WEBRiP.x264.HUN-Legacy
Because.of.Winn-Dixie.2005.720p.BluRay.DD5.1.x264.Hun-boOk
Korlátok nélkül 1080p
Wild.Rose.2018.1080p.BluRay.X264-AMIABLE
Road.to.Paloma.2014.BDRip.x264.HuN-BAYLEE
Mammoth.2009.DVDRip.x264.HuN-BAYLEE
Steve Irwin élete
Diego.Maradona.2019.SUBBED.BDRip.x264-CADAVER
Road.to.Paloma.2014.HUN.720p.BluRay.DD5.1.x264-ARROW
Road.To.Paloma.2014.HUN.1080p.BluRay.DD5.1.x264-ARROW
Steve Irwin élete 720p
Pokoli.Bazis.2008.DVDRip.x264.Hunsub-Pirosasz
Sherlock.Holmes.neveben.2012.NF.WEBRiP.x264.HUN-Legacy
22.Jump.Street.2014.RETAiL.HUN.PAL.DVD9-ISO
Steve Irwin élete 1080i
Iron.Man.2.2010.RETAiL.HUN.PAL.DVD9-ISO
Transylvania.6-5000.1985.1080p.BluRay.x264.Hun-TRT
Klaus.2019.720p.WEB-DL.DD+5.1.H264.HuN-No1
Klaus.2019.1080p.NF.WEB-DL.DDP5.1.Atmos.H.264.HUN.ENG-PTHD
The.Turkey.Bowl.2019.1080p.WEB-DL.H264.AC3-EVO
Feast.Of.The.Seven.Fishes.2019.1080p.WEB-DL.H264.AC3-EVO
Yesterday.2019.RETAiL.HUN.PAL.DVDR-No1
Mary.2019.BDRip.x264-AAA
Angel.Has.Fallen.2019.1080p.Bluray.Atmos.TrueHD.7.1.x264-EVO
Angel.Has.Fallen.2019.BDRip.x264-AAA
Angel.Has.Fallen.2019.720p.BluRay.x264-AAA
The.Current.War.2017.BDRip.X264-AMIABLE
The.Current.War.2017.1080p.BluRay.X264-AMIABLE
The.Current.War.2017.720p.BluRay.X264-AMIABLE
Az.allampolgar.2016.REPACK.NF.WEBRiP.x264.HUN-Legacy
Halj.mar.meg.2016.NF.WEBRiP.x264.HUN-Legacy
Zombieland.2009.1080p.UHD.BluRay.DD+7.1.HDR.x265.HuN-TRiNiTY
Fertozesveszely.1992.TVRiP.HUN.x264-CabCab
Fast.and.Furious.Presents.Hobbs.and.Shaw.2019.1080p.BluRay.REMUX.AVC.TrueHD.7.1.HUN-No1
Fast.and.Furious.Presents.Hobbs.and.Shaw.2019.2160p.REMUX.UHD.BluRay.TrueHD.7.1.HEVC.HuN-No1
Oceans.Eleven.2001.Open.Matte.HDTV.1080i.DD5.1.H264.HuN-NiBe
Upgrade.2018.RETAiL.HUN.PAL.DVDR-No1
Boom.for.Real.The.Late.Teenage.Years.of.Jean-Michel.Basquiat.2017.LiMiTED.DVDRip.x264-CADAVER
Robin.Hood.The.Rebellion.2018.DVDRip.x264-ARiES
Cold.War.2018.1080p.BluRay.x264-DEPTH
Cold.War.2018.720p.BluRay.x264-DEPTH
Shipwrecked.1990.720p.WEB-DL.H264.2xHUN.ENG-Eastwood
Warning.Sign.1985.AMZN.WEBRip.x264.HUN-Iquana
Otoko-tachi.No.Yamato.2005.BluRay.720p.HUN.JPN.x264-DenZo
A Poseidon katasztrófa
Book.Club.2018.DVDR-JFKDVD
Billionaire.Boys.Club.2018.COMPLETE.DVDR-JFKDVD
The.White.Ribbon.2009.HUN.BDRiP.x264-ARROW
Tuzolto.utca.25.1973.1080p.WEB-DL.H264.HUN-morgue
Tuzolto.utca.25.1973.720p.WEB-DL.H264.HUN-morgue
Requiem.1981.1080p.WEB-DL.H264.HUN-morgue
Requiem.1981.720p.WEB-DL.H264.HUN-morgue
Kilencedik.emelet.1977.1080p.WEB-DL.H264.HUN-morgue
Falfuro.1985.WEB-DL.H264.HUN-morgue
Circus.Maximus.1980.1080p.WEB-DL.H264.HUN-morgue
Cha-Cha-Cha.1982.1080p.WEB-DL.H264.HUN-morgue
Cha-Cha-Cha.1982.720p.WEB-DL.H264.HUN-morgue
A.Pendragon.legenda.1974.1080p.WEB-DL.H264.HUN-morgue
A.Pendragon.legenda.1974.720p.WEB-DL.H264.HUN-morgue
A.legy.1980.1080p.WEB-DL.H264.HUN-morgue
Alpha House
Digimon.The.Movie.2000.REPACK.1080p.AVC.Bluray.HUN.ENG.GER-Taur1
The.Old.Man.And.The.Gun.2018.720p.BluRay.x264-Replica
The.Old.Man.And.The.Gun.2018.BDRip.x264-DiAMOND
The.Old.Man.And.The.Gun.2018.1080p.BluRay.x264-Replica
Colditz.2005.1080p.Remux.AVC.DTS.MA.5.1.HUN-CRW
Godzilla.The.Planet.Eater.2018.1080p.NF.WEBRip.DDP5.1.x264-NTG
Godzilla.The.Planet.Eater.2018.720p.NF.WEBRip.DDP5.1.x264-NTG
Searching.2018.RETAiL.HUN.PAL.DVD9-No1
Jack.Reacher.2012.2160p.UHD.BluRay.HDR.REMUX.DTS-HD.MA.7.1.HEVC.HUN-Legacy
Vadászat az erdélyi aranyra
Az.orszagut.fantomja.II.2003.Web-DLRip.x264.HUN-Iquana
WALL-E 1080p REMUX
Asterix.es.a.vikingek.2006.1080p.x264.HUN.FRE-FOX
Brexit.The.Uncivil.War.2019.HDTV.x264-MTB
Rape Zombie - Lust of the Dead 5
Rape Zombie - Lust of the Dead 4
Germinal.1993.720p.BluRay.DD5.1.x264.HUN-GS88
Germinal.1993.BDRiP.x264.HUN-GS88
Germinal.1993.1080p.BluRay.DD5.1.x264.HUN-GS88
Searching.2018.RETAiL.HUN.PAL.DVDR-No1
Éljenek a gyerekek!
Az utolsó ördögök
What.They.Had.2018.DVDRip.x264-LPD
Time.Freak.2018.BDRip.x264-WiDE
Saturn.3.1980.BDRip.x264.HUN-Iquana
A.nagy.hajotores.1990.DVDRip.x264.HUN-Iquana
The.Quiet.2005.READ.NFO.720p.HDTV.x264.HUN.ENG-Eastwood
Dead.Birds.2004.DVDRip.x264.HUN-Iquana
Beneath.Still.Waters.2005.BDRip.x264.Hun-NRB
Egy.zseni.két.haver.egy.balek.1975.1080p.GER.Blu.ray.AVC.DTS.HD.MA.2.0.Remux.Hun-PlusUltra
I.Robot.2004.Remux.1080p.Open.Matte.AVC.DTS-MA.5.1.Hun-PlusUltra
Kanyar.2015.BluRay.720p.x264.Hun-Pirosasz
Time.Freak.2018.1080p.BluRay.DTS-HD.MA5.1.X264-iFT
Baby.Bumps.2017.RETAiL.HUN.PAL.DVDR-No1
Gyilkologep.1994.DVDRip.x264.HUN-Iquana
Any.Given.Sunday.Directors.Cut.[1999].BDRemux.1080p.VC-1.TrueHD5.1.HuN -d69a74
Hozzámjössz 1080p
Timescape.1992.DVDRip.x264.HUN-Iquana
King.Arthur.Legend.of.the.Sword.2017.Open.Matte.1080p.WEB.DL.DD.H.264.Hun-PlusUltra
A.kiraly.neveben.2.-Ket.vilag.BDRip.x264.HuN-BaKeR
Survival.Family.2016.720p.BluRay.x264-REGRET
Hi.Mom.1970.BDRip.x264.HUN-CRW
Doll.in.the.Dark.2016.DVDRip.x264-SPOOKS
Possession.1981.1080p.BluRay.x264.HUN.ENG-morgue
You.May.Not.Kiss.the.Bride.2011.BDRip.x264.Hun-NRB
Seraphim Falls - A múlt szökevénye
Baby.Bumps.2017.WEBRip.x264.HuN-No1
Baby.Bumps.2017.720p.WEB-DL.DD5.1.H264.HuN-No1
Baby.Bumps.2017.1080p.WEB-DL.DD5.1.H264.HuN-No1
The.Powerpuff.Girls.2002.1080p.WEB.DL.AAC.H264.Hun-PlusUltra
Alien.Abduction.2005.DVDRip.x264.HUN-Iquana
A.I.Assault.2006.DVDRip.x264.HUN-Iquana
DNA.1996.WEBRip.x264.HUN-Iquana
Hi.Mom.1970.1080p.Remux.AVC.LPCM.2.0.HUN-CRW
Roxanne.1987.1080p.BluRay.DTS.x264.HuN-NiBe
Good.Guys.Wear.Black.1978.BDRiP.x264.2XHUN-GS88
Ghost.in.the.Shell.2017.1080p.UHD.BluRay.DD-EX5.1.x264.HUN-PTHD
The.Equalizer.2.2018.READ.NFO.2160p.UHD.BluRay.HDR.REMUX.TrueHD.Atmos.7.1.HEVC.HUN-Legacy
Telle.Mere.Telle.Fille.2017.RETAiL.HUN.PAL.DVD9-No1
Night.of.the.Demons.2.1994.BDRiP.x264.HUN-GS88
Summer.03.2018.1080p.WEB-DL.H264.AC3-EVO
Loophole.2019.1080p.AMZN.WEB-DL.DDP2.0.H.264-NTG
Elvira's.Haunted.Hills.2001.DVDRip.x264.Hun-NRB
A majmok bolygója III. - A menekülés
Brexit.The.Uncivil.War.2019.720p.HDTV.x264-MTB
Earthstorm.2006.DVDRip.x264.HUN-Iquana
The.Lovers.2017.HUN.CUSTOM.BDRiP.x264-ARROW
The.Lovers.2017.HUN.CUSTOM.720p.BluRay.DD5.1.x264-ARROW
The.Lovers.2017.CUSTOM.1080p.Bluray.DTS.x264.HUN-GS88
Spiker.2007.DVDRip.x264.HUN-Iquana
Alone.in.the.Dark.2005.DVDRip.x264.HUN-Iquana
Cut.2000.WEBRip.x264.HUN-Iquana
The.Black.Hole.2006.DVDRip.x264.HUN-Iquana
Home.Again.2017.720p.BluRay.DD5.1.x264.HuN-No1
Home.Again.2017.BDRip.x264.HuN-No1
Windsor ház bukása
Vágyak nyomában 1080p
Crossed.Swords.1977.ReaD.NFo.ReTaiL.HUN.PAL.DVD9-MGM
The.LEGO.Ninjago.Movie.2017.1080p.BluRay.REMUX.AVC.TrueHD.7.1.HuN-No1
Tigris száműzetésben
Game.of.Thrones.Conquest.and.Rebellion.An.Animated.History.of.the.Seven.Kingdoms.RETAiL.BDRip.x264.H
The.LEGO.Ninjago.Movie.2017.1080p.BluRay.DTS.x264.HuN-No1
The.LEGO.Ninjago.Movie.2017.720p.BluRay.DD5.1.x264.HuN-No1
The.LEGO.Ninjago.Movie.2017.BDRip.x264.HuN-No1
The Empire of Corpses 720p
A tigriskirálynő
Harakiri.1962.1080p.BluRay.AVC.ReMuX.LPCM.1.0.JPA-HunsuB-NaCL
A tigriskirálynő 720p
Egszakadas.2007.AMZN.WEBRIP.x264.HUN-nubira
Teleszkóp
Teleszkóp 1080i
White.Girl.2016.iNTERNAL.BDRip.x264-LiBRARiANS
Walking.With.The.Enemy.2013.DVDRip.x264-FRAGMENT
Az ősz szele
Bullet.Head.2017.720p.BluRay.x264-PSYCHD
Bullet.Head.2017.1080p.BluRay.x264-PSYCHD
Blade.Runner.2049.2017.BD25.AVC.x264.DTS-HD.MA.HUN-Mont
Matrix.1999.Open.Matte.WEBRIP.x264.HUN-nubira
The.Killing.Of.A.Sacred.Deer.2017.LIMITED.720p.BluRay.x264-SAPHiRE
The.Killing.Of.A.Sacred.Deer.2017.LIMITED.BDRip.x264-SAPHiRE
A.Bittersweet.Life.2005.720p.Hun-Craving
Last.Flag.Flying.2017.720p.BluRay.x264-DRONES
Last.Flag.Flying.2017.BDRip.x264-DRONES
Ket.nap.a.volgyben.1996.HDTV.x264.HUN-nubira
Atnevelo.tabor.2008.WEBRIP.x264.HUN-nubira
The.Killing.Of.A.Sacred.Deer.2017.LIMITED.1080p.BluRay.x264-SAPHiRE
Inception.2010.2160p.UHD.BluRay.Remux.HDR.HEVC.DTS-HD.MA.5.1-GS88
A.hulladekgyujtoben.1965.HUN.CZE.CUSTOM.1080p.BluRay.x264-PLAN9
Ex.Machina.2014.UHD.BluRay.2160p.DTS.HEVC.REMUX.HUN-ClunkyChip
Blade.Runner.2049.2017.1080p.3D.BluRay.Half.OU.x264.DTS-HD.MA.7.1.Hun-HINA
Fletch.1985.BDRip.x264.HUN-gyontato
Split.2016.REMUX..2160p.UHD.Blu-ray.DTS-HD.MA.5.1.HEVC.HuN-Western
Hűségteszt
Wolf.Warrior.2.2017.LIMITED.1080p.BluRay.x264-USURY
Kaabil.2017.BluRay.720p.x264.AC3.HunSub-vTk
Wolf.Warrior.2.2017.LIMITED.BDRip.x264-BiPOLAR
Az őslakó 720p
8MM.1999.720p.BluRay.FLAC2.0.x264.HuN-Nimphas
Amerikai.szepseg.1999.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira
Harry.Potter.es.a.Halal.ereklyei.II.resz.2011.Open.Matte.WEBRIP.x264.HUN-nubira
Léon.1994.International.Cut.UHD.BluRay.2160p.TrueHD.Atmos.7.1.HEVC.REMUX-FraMeSToR
Így neveld a sárkányodat 720p
Blade.Runner.2049.2017.1080p.3D.BluRay.Half-SBS.DTS.x264.HuN-No1
Túl jó nő a csajom BD50
The Flight of the Eagle 720p
Blade.Runner.2049.2017.720p.BluRay.DTS.x264.HuN-No1
Harry.Potter.es.a.felver.herceg.2009.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira
The Man from Earth - Holocene 1080p
Geostorm.2017.720p.BluRay.x264-GECKOS
Jigsaw.2017.720p.BluRay.x264-GECKOS
Jigsaw.2017.1080p.BluRay.x264-GECKOS
Rogue.2007.720p.Hun-Craving
Harry.Potter.es.a.Fonix.rendje.2007.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira
Geostorm.2017.1080p.BluRay.x264-GECKOS
Halálos tavasz
Jigsaw.2017.BDRip.x264-GECKOS
Harry.Potter.es.a.tuz.serlege.2005.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira
Geostorm.2017.BDRip.x264-GECKOS
Back.to.the.Future.1985.1080p.BluRay.DTS.x264-DON
Back.to.the.Future.Part.II.1989.REPACK.1080p.HDTV.DTS.x264-DON
Interstellar.2014.2160p.UHD.BluRay.Remux.HDR.HEVC.DTS-HD.MA.5.1-GS88
Back.to.the.Future.Part.III.1990.1080p.BluRay.DTS.x264-DON
Egy kupac kufli
Harry.Potter.es.a.titkok.kamraja.2002.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira
It.2017.UHD.BluRay.2160p.HEVC.REMUX.HUN-ClunkyChip
Rosita 720p
Blade.Runner.2049.2017.REMUX.2160p.UHD.Blu-ray.TrueHD.7.1.HEVC.HuN-HyperX
8MM.1999.1080p.BluRay.Remux.AVC.DTS-HD.MA.2.0.HuN-Nimphas
Blade.Runner.2049.2017.BDRiP.x264.HuN-HyperX
Blade.Runner.2049.2017.1080p.BluRay.DTS.x264.HuN-HyperX
Blade.Runner.2049.2017.REMUX.1080p.Blu-ray.DTS-HD.MA.5.1.AVC.HuN-HyperX
8MM.1999.BDRip.x264.HuN-Nimphas
Sid.and.Nancy.1986.1080p.BluRay.x264.AAC.5.1-GEO
Shogun.Assassin.1980.HUN.BDRiP.x264-Gianni
Ex.Machina.2014.UHD.BluRay.2160p.DTS-X.7.1.HEVC.REMUX-FraMeSToR
Adok-kapok
Kicsiny karácsonyi kaland
The.Dark.Knight.Rises.2012.UHD.BluRay.2160p.DTS-HD.MA.5.1.HEVC.REMUX-FraMeSToR
The.LEGO.Ninjago.Movie.2017.CUSTOM.1080p.BluRay.x264.HuN-HyperX
The.LEGO.Ninjago.Movie.2017.CUSTOM.720p.BluRay.x264.HuN-HyperX
Lorenzo.olaja.1992.HUN.ENG.CUSTOM.720p.WEB-DL.x264-PLAN9
Lány a hídon
A belső oldal 720p
Dredd.2012.1080p.BluRay.REMUX.AVC.DTS-HD.MA.7.1.HuN-BecK's
Salyut-7.2017.BluRay.1080p.DTS-HD.MA5.1.x264-CHD
Szaguldo.erod.1995.BDRip.x264.HUN-nubira
Tornado.New.Yorkban.2008.WEBRIP.x264.HUN-nubira
Gázláng
Börtönrock
Harry.Potter.es.a.bolcsek.kove.2001.AMZN.Open.Matte.WEBRIP.x264.HUN-nubira
Irreversible.2002.1080p.BluRay.DD5.1.x264.HUN-GS88
Veri az ördög a feleségét 720p
The.Santa.Clause.2.2002.1080p.BluRay.REMUX.DTS-HD.AVC.HuN-TRiNiTY
The.Santa.Clause.1994.1080p.BluRay.DTS.x264.HuN-TRiNiTY
The.Santa.Clause.1994.1080p.BluRay.REMUX.DTS-HD.AVC.HuN-TRiNiTY
Rocky.V.1990.BDRip.x264.HUN-gyontato
Portyán
A báránysültek hallgatnak
Farkaskirálynő 720p
Bombázók a seregnek
The.Man.Who.Knew.Infinity.2015.RETAIL.HUN.PAL.DVDR-BHO
Port Arthur
Az.uj.diri.1987.HUN.720p.WEB-DL.x264-TOXI
Ripacsok
One.Magic.Christmas.1985.Hun.DVDRip.x264-Russell
Dögkeselyű
Csak semmi pánik...
A szeleburdi család
Szürke senkik 1080i
Tarzan, a majomember
Patkányok háborúja
Popeye
Halál a Níluson
The Last Broadcast
Barbie.Csillagok.kozott.2016.1080p.BluRay.ReMuX.AvC.Ac3.5.1.HuN-BaKeR
Barbie.Star.Light.Adventure.2016.HUN.PAL.DVDR-BHO
Szürke senkik
Killshot.2008.HUN.1080p.BluRay.DTS.x264-ARROW
Christmas.Vacation.1989.720p.REMASTERED.BluRay.FLAC2.0.x264.HuN-TRiNiTY
Christmas.Vacation.1989.1080p.REMASTERED.BluRay.FLAC2.0.x264.HuN-TRiNiTY
Home.Alone.1990.720p.REMASTERED.BluRay.DD5.1.x264.HuN-TRiNiTY
Home.Alone.1990.1080p.REMASTERED.BluRay.DTS.x264.HuN-TRiNiTY
Home.Alone.1990.1080p.REMUX.BluRay.DTS-HD.AVC.HuN-TRiNiTY
Deck.the.Halls.2006.RETAiL.720p.BluRay.DD5.1.x264.HuN-TRiNiTY
Deck.the.Halls.2006.RETAiL.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Jingle.All.the.Way.1996.720p.RETAiL.BluRay.DD5.1.x264.HuN-TRiNiTY
Jingle.All.the.Way.1996.1080p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY
Penelope.2006.Hun.720p.BluRay.x264-Joe
Démonok között 2. BD50
Egy tiszta nő
Vigyázó szemek
Egy mukkot se!
Polisse.2011.HunSub.DVDRip.x264-Russell
Train.to.Busan.2016.KOREAN.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1-FGT
Szerelem az éjszakában
Train.to.Busan.2016.KOREAN.1080p.BluRay.x264.DTS-FGT
Végtelen szerelem
Knight.Moves.1992.Retail.HUN.PAL.DVD9-GS88
Jövőre veled ugyanitt
In.a.Valley.of.Violence.2016.LIMITED.BDRip.x264-DRONES
Lady Chatterley szeretője
Race.2016.RETAiL.HUN.PAL.DVDR-BHO
Mindhalálig zene
Denial.2016.BDRip.x264-GECKOS
Buddy Holly története
Café Lumiere
Kuroneko.1968.iNTERNAL.BDRip.x264-MARS
Severed.2005.DVDRip.x264.HuN-BAYLEE
Bot.Beno.2015.HUN.DVDRiP-UBIKA
Boszi.seprunyelen.2012.HUN.DVDRiP-UBIKA
A.Graffalokolyok.2011.HUN.DVDRiP-UBIKA
Barbie.Star.Light.Adventure.2016.HUN.720p.BluRay.DD5.1.x264-ARROW
Barbie.Star.Light.Adventure.2016.HUN.1080p.BluRay.DTS.x264-ARROW
Barbie.Csillagok.kozott.BDRip.x264.HuN-BaKeR
Race.2016.HUN.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1-ARROW
Race.2016.RETAiL.HUN.PAL.DVD9-VIKFORAK
Race.2016.HUN.1080p.BluRay.DTS.x264-ARROW
Race.2016.HUN.720p.BluRay.DD5.1.x264-ARROW
A tűz martaléka
Átlagemberek
Spies.Like.Us.1985.VC1.BDRemux.DTSHD.2.0.HUN-USA
The.Magnificent.Seven.2016.1080p.BluRay.REMUX.AVC.DTS-HD.MA.7.1.HuN-BecK's
Arthur
A Shaolin 36 próbatétele
Sztracsatella.1996.Retail.HUN.PAL.DVD-GS88
Troll.2.1990.HUN.720p.Bluray.x264-TOXI
Amazing.Grace.2006.HUN.PAL.DVDR-Fibonacci
Afganisztáni víg napjaim
Our.Kind.of.Traitor.2016.RETAiL.HUN.PAL.DVDR-BHO
Elite.Squad.2.2010.1080p.Blu-ray.REMUX.AVC.DTS-HD.MA.5.1.RoSubbed-playBD
A bádogdob
25 millió fontos váltságdíj
The.Magnificent.Seven.2016.HUN.BDRiP.x264-ARROW
The.Magnificent.Seven.2016.720p.BluRay.DD5.1.x264.HuN-FL0W3R
The.Magnificent.Seven.2016.1080p.BluRay.DD5.1.x264.HuN-FL0W3R
Die.Unfassbaren.2.German.2016.AC3.BDRiP.x264-XF
Nous.York.2012.Retail.Hun.DVDRip.x264-Russell
Other.People.2016.LIMITED.DVDRip.x264-BiPOLAR
Our.Kind.of.Traitor.2016.HUN.1080p.Blu-ray.REMUX.AVC.DTS-HD.MA.5.1-ARROW
Our.Kind.Of.Traitor.2016.HUN.1080.BluRay.DD5.1.x264-ARROW
Our.Kind.of.Traitor.2016.HUN.720p.BluRay.DD5.1.x264-ARROW
Our.Kind.of.Traitor.2016.HUN.BDRiP.x264-ARROW
Our.Kind.of.Traitor.2016.RETAiL.HUN.PAL.DVD9-VIKFORAK
Elő robotok
The.Secret.Life.of.Pets.2016.RETAiL.HUN.PAL.DVD9-HyperX
War.Dogs.2016.HUN.PAL.DVDR-Georgio
A.szex.szorny.1999.HUN.1080p.WEB-DL.x264-TOXI
A Pentatonix Christmas Special 720p
War.Dogs.2016.RETAIL.HUN.PAL.DVD9-DeVeDe9
Holtodiglan
A Pentatonix Christmas Special
A világ kincsei - A természet kincsei
Pardaillan lovag 720p
Le.gendarme.et.les.gendarmettes.1982.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi
San.Andreas.2015.RETAIL.HUN.PAL.DVD9-HRT
Le.gendarme.et.les extra-terrestres.1979.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi
Le.gendarme.en.balade.1970.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi
1944.2015.720p.BluRay.DD5.1.x264-VietHD
Le.gendarme.se.marie.1968.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi
Planet.of.the.Apes.2001.HUN.BDRiP.x264-ARROW
Sorvadj.el.1996.HUN.720p.BluRay.x264-TOXI
A vörös ár - A vörösizsap katasztrófa 720p
Air.2015.ReTaiL.PAL.DVD.Hungarian-JBR
A Valentin napi mészárlás 1080p
Dope.2015.BDRip.x264-GECKOS
Traumschiff.Surprise.Persiode.1.2004.BDRemux.AVC.DTS-ES.6.1.Hun-boOk
Spy.2015.RETAiL.2in1.HUN.PAL.DVD9-HyperX
Air.2015.1080p.Bluray.Remux.AVC.DTS-HD.MA.5.1.HUN-KuNgZi
Spy.2015.1080p.Extended.Cut.Bluray.Remux.AVC.DTS-HD.MA.7.1.HUN-KuNgZi
Air.2015.BDRip.x264.HuN-HRT
Air.2015.720p.BluRay.DD5.1.x264.HuN-HyperX
Air.2015.1080p.BluRay.DTS.x264.HuN-HyperX
Tűzgyűrű 3D 1080p REMUX
Spy.2015.Extended.Cut.BDRip.x264.HuN-HRT
Le.gendarme.a.New.York.1965.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi
Spy.2015.Extended.Cut.720p.BluRay.DD5.1.x264.HuN-HRT
Spy.2015.Extended.Cut.1080p.BluRay.DTS.x264.HuN-HRT
Le.gendarme.de.Saint-Tropez.1964.1080p.Bluray.Remux.AVC.DD2.0.HUN-KuNgZi
The.Vatican.Tapes.2015.LIMITED.RERiP.BDRip.x264-ALLiANCE
The.Vatican.Tapes.2015.LIMITED.RERiP.720p.BluRay.x264-ALLiANCE
The.D.Train.2015.BDRip.x264.HuN-HRT
The.D.Train.2015.720p.BluRay.DD5.1.x264.HuN-HRT
The.D.Train.2015.1080p.BluRay.DTS.x264.HuN-HRT
Latin.Lover.2015.1080p.BluRay.DTS.x264.HuN-SaS
Compulsion.2013.CUSTOM.BDRip.x264.HUN-SLN
Marshland.2014.FESTiVAL.DVDRiP.X264-TASTE
San.Andreas.2015.3D.BD25.MVC.DTS-HD.7.1.Hun-BekőTojni
36th.Precinct.2004.BDRip.x264.HUN-CRW
Operation.Petticoat.1959.1080p.BluRay.x264.Hun-GS88
The.Wings.of.the.Dove.1997.DVDRip.x264.HUN-CRW
A felhők fölött 3 méterrel 1080p
Dont.Be.Afraid.of.the Dark.2010.BDRip.x264.HUN-CRW
Set.It.Off.1996.DVDRip.x264.HUN-CRW
Hamupipoke.2.Az.almok.valora.valnak.2002.BDRip.x264.HuN-BaKeR
Home.Alone.1990.REMASTERED.720p.BluRay.X264-AMIABLE
Z.For.Zachariah.2015.LIMITED.1080p.BluRay.DTS.x264.HUNSUB-SaS
Othello, a velencei mór tragédiája
Bolond mozi mozibolondoknak
Z.For.Zachariah.2015.LIMITED.BDRip.x264-iNFAMOUS
Paper.Towns.2015.BDRip.x264-ALLiANCE
Z.For.Zachariah.2015.LIMITED.720p.BluRay.x264-iNFAMOUS
Captain.Sabertooth.and.the.Lama.Rama.Treasure.2014.ReTaiL.PAL.DVD.Hungarian-JBR
Spy.Susan.Cooper.Undercover.EXTENDED.German.2015.AC3.BDRiP.x264-EXQUiSiTE
Kind.44.German.2015.AC3.BDRiP.x264-EXQUiSiTE
Descendants.Die.Nachkommen.German.2015.AC3.DVDRiP.x264-XF
Kánikulai délután BD50
An.Honest.Liar.2014.1080p.WEB-DL.x264.AC3-NiKON
Turbo.Kid.2015.1080p.BluRay.DTS.X264-AMIABLE
Turbo.Kid.2015.LIMITED.BDRip.X264-AMIABLE
Operator.2015.BDRip.x264-RUSTED
Turbo.Kid.2015.LIMITED.720p.BluRay.X264-AMIABLE
My.Own.Private.Idaho.1991.720p.BluRay.DD5.1.x264.HuN-LiLBOX
Traumschiff.Surprise.Persiode.1.2004.REPACK.BDRip.x264.Hun-boOk
Seabiscuit.2003.720p.BluRay.DTS.x264.HuN-SaS
June.2015.WEB-DL.x264-RARBG
Avengers.Age.of.Ultron.2015.Custom.3D.BD25.DTS-HD.7.1.Hun-BekőTojni
Ray.2004.EXTENDED.DVDRiP.AC3.x264-LEGi0N
Monsters.Dark.Continent.2014.RETAiL.HUN.PAL.DVDR-Georgio
Danny.Collins.2015.ReTaiL.PAL.DVD.Hungarian-JBR
Hamupipoke.3.Elvarazsolt.mult.2007.HUN.BDRiP.x264-ARROW
A.teremto.gondolat.2013.DVBRip.x264.AC3.Hun-MrX
Monsters.Dark.Continent.2014.1080p.BluRay.DTS.x264.HuN-DIABLO
Monsters.Dark.Continent.2014.720p.BluRay.DD5.1.x264.HuN-DIABLO
Az első élet D02
Mademoiselle.Chambon.2009.1080p.BluRay.DD5.1.x264.HuN-LiLBOX
Deathgasm.2015.WEB-DL.x264-RARBG
Monsters.Dark.Continent.2014.BDRip.x264.Hun-DIABLO
Tracers.2014.ReTaiL.PAL.DVD.Hungarian-JBR
The.Long.Voyage.Home.1940.Custom.PAL.DVD.Hun-Garfield
Barely.Lethal.2015.ReTaiL.PAL.DVD.Hungarian-JBR
A hetedik fiú
Az első élet D01
The.Amazing.Captain.Nemo.1978.DVDRip.XviD.HUN-Baggio1
Komodo.urai.2008.DVBRip.x264.AC3.Hun-MrX
A.domino.elv.1977.1080p.BluRay.x264.DTS.HuN.EnG-Jak68
Dino.kaland.2012.BDRip.x264.HuN-BaKeR
Dzsihad.Amerikaban.2012.DVBRip.x264.AC3.Hun-MrX
A.kisbabak.titkos.elete.2014.DVBRip.x264.AC3.Hun-MrX
The.Lion.King.1994.1080p.Bluray.Remux.AVC.DTS-HD.MA.HUN.7.1-SLM1
Extinction.2015.1080p.WEB-DL.DD5.1.H264.HUN-KuNgZi
Barely.Lethal.2015.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-SaS
Road.Trip.2000.Unrated.BDRemux.AVC.DTS-HD.MA5.1.Hun-boOk
Torrente.5.2014.HUN.PAL.DVDR-Netman
San.Andreas.2015.BD25.Retail.AVC.x264.TrueHD.7.1.HUN-Mont
Insidious.Chapter.3.2015.1080p.BluRay.REMUX.AVC.DTS-HD.MA.5.1.HuN-SaS
Ace.Ventura.When.Nature.Calls.1995.1080p.BluRay.DTS.x264.HuN-HRT
Ace.Ventura.Pet.Detective.1994.1080p.BluRay.DTS.x264.HuN-HRT
Insidious.Chapter.3.2015.BDRip.x264.HuN-HRT
Insidious.Chapter.3.2015.720p.BluRay.DD5.1.x264.HuN-HRT
Insidious.Chapter.3.2015.1080p.BluRay.DTS.x264.HuN-HyperX
Folytassa, Jack 1080p
The.Other.Woman.2014.720p.BluRay.DD5.1.x264.HuN-TRiNiTY
The.Other.Woman.2014.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Sugarlandi hajtóvadászat 720p
Robocroc.2013.CUSTOM.DVDRip.XviD.Hun-SLN
Mandragóra
Inception.2010.1080p.REMUX.AVC.BluRay.DTS-HD.MA.5.1.HUN-C4
Turkisch.fur.Anfanger.2012.CUSTOM.DVDRip.XviD.Hun-SLN
A.Midsummer.Nights.Dream.1999.720p.WEB-DL.DD5.1.H.264.HuN-LiLBOX
A 13-as rendőrőrs ostroma 1080p
The.Hooligan.Factory.2014.BDRip.XviD.HuN-No1
Mi a franc van
The.Hot.Chick.2002.1080p.WEB-DL.DD5.1.H.264.HuN-LiLBOX
The.Hooligan.Factory.2014.BDRip.x264.HuN-No1
Rám se ránts
Jackie.a.Jofiu.DVDRip.HUN.XviD-djzsolt
The.Last.Exorcism.2010.HUN.DVDRip.Xvid-akela
Varj.mig.sotet.lesz.1976.Hun.DVDRip.XVID-Buksza
The.Mechanic.2011.DVDRip.XviD.AC3-Rx
The.Little.Prince.1974.CUSTOM.HUN.DVDRip.XviD-uzoli
The.City.of.Lost.Children.1995.HUN.DVDRip.XviD-HSF
Ran.1985.HUN.DVDRiP.Xvid-Thick
Lady.Chatterley.2006.HUN.DVDRiP.XviD-CORN
House.Calls.1978.HUN.DVDRiP.Xvid-Thick
A.Pacak.1979.Custom.26.Evfordulos.kiadas.DVDRip.XviD.Hungarian-JustOne
Sammys.Adventures.The.Secret.Passage.3D.READ.NFO.2010.HUN.DVDRip.XviD-Gonosz
The.House.of.the.Devil.2009.LIMITED.BDRip.XviD-ESPiSE
National.Geographic.Earth.Making.of.a.Planet.2010.PDTV.XviD.Hungarian-TvTiME
AMERIKAI.KIBORG.1993.HUN.DVDRip.XVID-Buksza
Adam.And.Eve.2005.DVDRip.Xvid.Hun-Source
Rosszfiuk.2000.READ.NFO.HUN.DVDRip.XviD-Gonosz
Louis.C.K.Chewed.Up.2008.DVDRip.XviD-VH-PROD
Keselyuk.karmaiban.1964.HUN.READNFO.720p.Bluray.x264-TOXI
Bolondok felvonulása
Divergent.2014.1080p.BluRay.Remux.AVC.DTS-HD.MA.7.1.HuN-HRT
Belle.2013.BDRip.x264-GECKOS
Csótányinvázió
Divergent.2014.1080p.Bluray.DTS.x264.HuN-TRiNiTY
Need.for.Speed.2014.CUSTOM.BD25.AVC.x264.HUN.DTS-HD.MA-Mont
Divergent.2014.720p.Bluray.DD5.1.x264.HuN-TRiNiTY
Alfa Rómeó és Júlia
Ha Versailles mesélni tudna
Divergent.2014.PAL.DVDR.Hungarian-nCORE
Idegen a világűrből
Divergent.2014.BDRip.x264.HUN-ZHR
Of.Gods.and.Men.2010.HUN.PAL.DVDR-MWT
Yogaworks.Body.Slim.2009.DVDRiP.x264-AERODELUXE
Divergent.2014.BDRip.XviD.HUN-ZHR
Absurd
Eletem.ertelme.1998.Custom.Hun.Pal.DVDRip.Xvid-Buksza
Sabotage.2014.1080p.REMUX.AVC.BluRay.DTS-HD.MA.5.1.HUN-C4
Zoldkartya.1990.HUN.PAL.DVDR-T4T
Sabotage.2014.PROPER.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Sabotage.2014.PROPER.BDRip.XviD.HuN-No1
Need.For.Speed.2014.1080p.3D.BluRay.AVC.DTS-HD.MA.7.1-TreZzoR
Sabotage.2014.PROPER.720p.BluRay.DD5.1.x264.HuN-TRiNiTY
Bottle.Rocket.1996.BluRay.720p.DTS.x264-CHD
My.Little.Princess.2011.CUSTOM.DVDRiP.HUN.XViD-TiGeR
McBride - Rekviem
Ilyen a formám 1080p
Szabotázs
Nagyítás 720p
Evangelion - 2.0 You Can (Not) Advance 1080p
Evangelion 1.0 (Nem) vagy egyedül 1080p
A vörös fogadó
Marebito
Éjféli leszámolás
A harcos éjszakája
Face.Off.1997.HUN.BDRip.XviD-HDEvo
Premonition.2007.BDRip.XviD.HuN-DreamSite
Az ördög és a tízparancsolat 720p
The.Deal.2008.DVDRip.XviD.Hungarian-vigyoree
A.selyem.sikolya.1996.HUN.FRE.CUSTOM.DVDRip.XviD-PLAN9
The.Blind.Side.2009.BDRiP.XviD.HuN-ASSASSiN
Mocskos.Zsaru-New.Orleans.Utcain.2009.BDRip.XviD.Hun-btr9
Brothers.2009.BDRip.XviD-HQ-HUN
Bachelor.Party.2.The.Last.Temptation.2008.UNRATED.DVDRiP.HUN.XViD-TiGeR
Rokonok.2006.HUN.PAL.DVDR-NON
Paul.Blart.Mall.Cop.BDRiP.XviD.Hun-Kukac1
Kickboxer.1989.HUN.BDRip.Xvid-Hurricane
A főnök felesége 1080p
A sárga kutya barlangja
Starred.Up.2013.1080p.BluRay.X264-AMIABLE
Rio.2.2014.1080p.3D.BluRay.CEE.AVC.DTS-HD.MA.7.1-TreZzoR
Tesseract.2003.DVDRip.Xvid.HUN-BaKeR
Mr.Peabody.and.Sherman.2014.1080p.REMUX.AVC.BluRay.DTS-HD.MA.5.1.HUN-C4
Starred.Up.2013.720p.BluRay.X264-AMIABLE
A szcientológia ügynökei
Starred.Up.2013.BDRip.X264-AMIABLE
Bartek.a.varazslatos.1999.DVDRip.XviD.HUN-BaKeR
A szcientológia ügynökei 1080i
Düh és dicsőség 2.
My.Moms.New.Boyfriend.2008.720p.BluRay.DTS.x264.HuN-LiLBOX
Mr.Peabody.And.Sherman.2014.1080p.BluRay.DTS-ES.x264.HuN-HRT
Mr.Peabody.and.Sherman.2014.PAL.DVDR.Hungarian-nCORE
Mr.Peabody.And.Sherman.2014.BDRip.x264.HUN-ZHR
Mr.Peabody.And.Sherman.2014.720p.BluRay.DD5.1.x264.HuN-HRT
Mr.Peabody.And.Sherman.2014.BDRip.XviD.HUN-ZHR
Az olajfák alatt
New World 1080p
Címe ismeretlen
Harry Potter és a bölcsek köve
Star.Trek.Into.Darkness.2013.BDRip.x264.HuN-ZHR
Egy jenki Artúr király udvarában
Star.Trek.Into.Darkness.2013.1080p.3D.BluRay.Half-OU.DD5.1.x264.HuN-LiLBOX
Star.Trek.Into.Darkness.2013.BDRip.x264.HuN-No1
Star.Trek.Into.Darkness.2013.720p.BluRay.DD5.1.x264.HuN-TRiNiTY
Star.Trek.Into.Darkness.2013.1080p.BluRay.DD5.1.x264.HuN-TRiNiTY
Star.Trek.Into.Darkness.2013.BDRiP.XviD.HuN-PpB
Airplane.II.The.Sequel.1982.720p.HDTV.HuN.EnG.x264-TRiNiTY
Valkyrie.2008.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY
Wing.Commander.1999.BluRay.Remux.1080p.AVC.DTS-HD.MA.5.1.Hun-KRM
Airplane.2.The.Sequel.1982.HDTV.1080i.x264.hun-Bak
Lenyűgöző korallzátony - Rejtélyes vízalatti világok 1080p
Passenger.57.1992.BDrip.Custom.HUN.x264-DenZo
The.Company.Men.2010.Custom.Pal.DVDR.Hun-Ronnie
Kis Nemo Álomországban 720p
Lenyűgöző korallzátony 3D 1080p
Szaguldo.bosszu.1986.3xHUN.720p.BluRay.x264-TOXI
A.Barbar-Legenda.A.Szellemharcosrol(bovitett valtozat)Hun.PAL.DVDR-Gazdi
A.svindler.1961.HUN.ENG.CUSTOM.720p.BluRay.x264-PLAN9
High.Plains.Drifter.1973.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY
Lenyűgöző korallzátony - Rejtélyes vízalatti világok 3D BD25
Columbus.Circle.2012.720p.BluRay.DD5.1.x264.HUN-R4Z3R
JFK.1991.DirCut.720p.HUN.READNFO.BluRay.x264-TOXI
I.Spit.On.Your.Grave.1978.720p.BluRay.x264-TiTANS
Rise.Of.The.Footsoldier.2007.720p.BluRay.DTS.x264.HuN-TRiNiTY
3096.Days.2013.DVDRiP.XViD-SML
Class.Action.1991.DVDRiP.XviD.HuN-HDNeT
Lenyűgöző korallzátony 1080p
Zambezia.2012.RETAiL.HUN.PAL.DVD9-HRT-1st
Személyes ügy
A máltai sólyom
Fűrész
V.For.Vendetta.2005.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY
Bloodlines.HUN.TVRip.XviD-DART
Péntek 13
I.Spit.on.Your.Grave.2010.ReaD.NFO.CuSToM.uNRaTeD.BDRiP.XviD.HuN-BAttila85
The.Nutcracker.In.3D.2010.BDRiP.x264.HuN-BAttila85
Jesus.liebt.mich.German.BDRip.x264-CONTRiBUTiON
The.Jungle.Book.1967.1080p.BluRay.DTS.x264.HuN-BAttila85
Death.Sentence.2007.720p.BluRay.DTS.x264.HuN-OCB
Haboru.a.Foldon.2000.HUN.READNFO.720p.BluRay.x264-TOXI
Cheerful.Weather.for.the.Wedding.2012.BDRip.XviD.Hun-BHO
Szökevényvonat 720p
The.Company.Men.2010.BDRip.x264.HuN-No1
The.Company.Men.2010.720p.BluRay.DTS.x264.HuN-No1
Titanic.1997.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY
The.Nutcracker.In.3D.2010.ReaD.NFO.BDRiP.XviD.HuN-BAttila85
I.Spit.on.Your.Grave.2.UNRATED.BDRip.XviD.AC3-WAR
Ace.Ventura.When.Nature.Calls.1995.BDRip.x264.HuN-No1
The.Jungle.Book.2.2003.1080p.BluRay.DTS.x264.HuN-BAttila85
The Kings of Summer 2013 BDrip XviD AC3 MiLLENiUM
Forgoszel.1946.HUN.ENG.CUSTOM.720p.BluRay.x264-PLAN9
A.dzsungel.konyve.2.2003.HUN.BDRiP.XviD-ARROW
Bűnvadászok BD25
Tom.and.Jerrys.Giant.Adventure.2013.BDRip.x264.HuN-arpi170
The.Fugitive.1993.HUN.BDRip.XviD-HDEvo
Brian élete
Minority.Report.2002.INTERNAL.DVDRip.XviD-FiNaLe
Black.Gold.2011.CUSTOM.HUN.BDRip.XviD-HDEvo
Otthon az úton
What.the.Day.Owes.the.Night.2012.CUSTOM.BDRip.x264.HuN-ZHR
Polytechnique
Az új szerelem
The.Italian.Job.2003.720p.Bluray.DD5.1.x264.HuN-TRiNiTY
A vonal másik végén
LaMB.2009.WEB-DL.x264.HUN-Teko
The.Italian.Job.2003.1080p.Bluray.DTS.x264.HuN-TRiNiTY
Clash.of.the.Titans.2010.BDRiP.x264.HuN-BAttila85
Farscape.The.Peacekeeper.Wars.2004.720p.BluRay.x264-BRMP
The.Debt.2010.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY
Blue.Like.Jazz.2012.CUSTOM.BDRip.XviD.Hungarian-HuSync
Tom.and.Jerrys.Giant.Adventure.2013.1080p.BluRay.REMUX.DTS-HD.MA.5.1.AVC.Hun-arpi170
Maximum.Conviction.2012.REPACK.Custom.Pal.DVDR.Hun-Ronnie
The.Iceman.2012.DVDRip.XviD-iGNiTiON
The.Great.Gatsby.2013.CUSTOM.HUN.PAL.DVDR-MWT
A.megbocsajtas.utja.2007.CUSTOM.DVDRip.XviD.HUN.HRD
Edison.2005.DVDRip.XviD.HUN-AMR
The.Fugitive.1993.720p.RETAiL.BluRay.DTS.x264.HuN-TRiNiTY
Naked.Gun.33.1.3.The.Final.Insult.1994.720p.BluRay.x264.DD5.1.DUBBED.HuN-Girnyo
Dinocroc.vs.Supergator.2010.CUSTOM.BDRip.XviD.Hun-SLN
Wither.2012.720p.BluRay.DTS.HunSub.x264-HORRORFREAK
World.War.Z.2013.UNRATED.DVDRip.XviD-PTpOWeR
A kis hableány - A kezdet kezdete 1080p
Tom.and.Jerrys.Giant.Adventure.2013.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Tom.and.Jerrys.Giant.Adventure.2013.720p.BluRay.DTS.x264.HuN-TRiNiTY
Tom.and.Jerrys.Giant.Adventure.2013.HUN.DVDRip.Xvid-ZHR
Versailles felemelkedése és bukása - XVI. Lajos 720p
Watchmen 2009 1080p EUR Blu-ray AVC TrueHD 5.1-BLUEBIRD
Runaway.Train.1985.BDrip.Custom.HUN.x264-DenZo
Utolsó üzenet - özv. Horthy Istvánné manifesztuma a magyar nemzethez
Tom.and.Jerrys.Giant.Adventure.2013.Retail.HUN.PAL.DVDR-B13
Természetes világ - A jéghegy, amely elsüllyesztette a Titanicot
Camille.2012.DVDRip.XviD.HUN-R4Z3R
Katonazene 1080i
Gesztenye, a honalapító 720p
The.American.Friend.1977.CuSToM.HUN.DVDRip.Xvid-ZHR
Casino.1995.PAL.2xHUNDUB-ATES26
The.Marine.2.2009.CUSTOM.DVDRip.XviD.Hungarian-HuSync
Batman.Mystery.of.the.Batwoman.2003.DVDRip.ENG.x264-easyNFO
S.O.S. Szobafogság
Batman.&.Mr.Freeze.SubZero.1998.DVDRip.ENG.x264-easyNFO
Dr. Minorka Vidor nagy napja
Az utolsó randevú
Avanti!.1972.DVDRip.HUN.XviD-JFF
Hot.Coffee.2011.CUSTOM.HDTV.XviD.Hungarian-HuSync
Cant.Hardly.Wait.1998.CuSToM.HUN.DVDRip.Xvid-ZHR
A Monty Python Amerikában
Kölcsönlakás
Infernal.Affairs.2002.HUN.BDRip.XviD-Penge71
Csillagközi invázió
Roman.Holiday.1953.CuSToM.HUN.DVDRip.Xvid-ZHR
Thir13en.Ghosts.2001.Blu-Ray.1080p.MPEG-4.AVC.DTS.Hun.Remux-Triad
Sergio Leone - Volt egyszer egy amerikai álom
Thir13en.Ghosts.2001.Hun.BDRip.XviD-Triad
Coma.1978.BluRay.720p.Hun.x264-DenZo
Contraband.2012.Retail.DVDRiP.XviD.HuN-MWT
Contraband.2012.HUN.PAL.DVDR-MWT
Rejtélyek asszonya - Egy régi adósság
Systema Spetsnaz - Knife in Close Combat
Batman.Mask.of.the.Phantasm.1993.DVDRip.HUN.ENG.x264-easyNFO
Systema - Fundamentals of Knife Disarming
Systema Classic Series - New York Seminars
Systema - Escape from Holds
Systema - Improvised Weapons
Tom.And.Jerry.The.Movie.1992.HUN.PAL.DVDR-Knight
Barfuss.2005.DVDRip.XviD-lacihaver
Super.8.2011.BDRip.x264.Hungarian-Gonosz
Safe.House.2012.BDRip.x264.Hungarian-Gonosz
Hegylako.DVDR.HunDub.Pal.1986-FoF
Rossz nap Black Rocknál
Az Angyal vérbosszúja
Káprázat
Elrabolt.elet.2009.HUN.DVDRip.XviD-DiViSiVE
A tizedik áldozat
Salmon.Fishing.In.The.Yemen.2011.BDRip.XviD-COCAIN
Justice.League.Crisis.On.Two.Earths.2010.1080p.BluRay.HUN.ENG.x264.easyNFO
James.Bond.Halalos.remuletben.HunDub.PAL.DVDR-Zso
Fesd újra, Van Gogh!
The.Quiet.Earth.1985.720p.BluRay.x264-SiNNERS
Star.Wars.Episode.IV.A.New.Hope.1977.1080p.BluRay.DTS-ES.x264.Hun-rB
Blitz.2011.DVDRiP.XviD.HuN-MWT
Attack.Of.The.50.Feet.Woman.1993.iNT.CUSTOM.DVDRip.XviD.Hun-JM
James.Bond.Halalvagta.HunDub.PAL.DVDR-Zso
James.Bond.Halj.meg.maskor.HunDub.PAL.DVDR-Zso
James.Bond.Holdkelte.HunDub.PAL.DVDR-Zso
A.Dangerous.Method.2011.PROPER.DVDRip.XviD-EXViD
Stromboli
The.Last.King.of.Scotland.2006.BluRay.720p.DTS.x264.dxva-FLAWL3SS
Wedding.Wars.2006.TVRip.XviD.Hun-SLN
Lesz egyszer egy Ifipark
Womb.2010.720p.BluRay.DTS.x264.Hungarian-HuSync
American.Reunion.UNRATED.720p.BluRay.X264-BLOW
Blitz.2011.Hun.PAL.DVDR-Gazdi
Blitz.2011.BDRiP.XviD.HuN-MWT
The.Sweet.Hereafter.1997.READ.NFO.720p.BluRay.HUN.ENG.x264-HaNTaH
Basic.Instinct.2.2006.720p.BluRay.DD5.1.x264.HuN-Cafi
Ransom.1996.HUN.PAL.DVDR-SaS
Saw.3D.2010.Half-SBS.3D.1080p.Bluray.DTS.x264.HuN-TRiNiTY
Doktor.Szoszi.2001.Blu-ray.1080p.x264.HUN.ENG-ZJT
Németország nulla évben
Ede.megeve.ebedem.DVDR.HunDub.Pal.2006-FoF
Womb.2010.CUSTOM.DVDRip.XviD.Hungarian-HuSync
Doktor.Szoszi.2001.Blu-ray.720p.x264.HUN.ENG-ZJT
Too.Big.to.Fail.2011.DVDRiP.XviD.HuNSUB-MWT
Police.Academy.1984.720p.BluRay.x264.FLAC.DUBBED.DUAL.HuN-Girnyo
A.frigylada.2003.HUN.DVDRip.XviD-DiViSiVE
Elore.2002.HUN.DVDRip.XviD-DiViSiVE
Penz.all.a.hazhoz.1939.HUN.TVRip.x264-DReBiN
Combat Aikido - Jason Delucia
Weather.Wars.2011.CuSToM.DVDRip.XviD.Hun-SLN
Navy Seal Team - Hand-To-Hand Combat Training Volume 1
Clear.and.Present.Danger.1994.BDRip.XviD.HUN-ZHR
The.Fourth.Kind.2009.720p.BluRay.DTS.x264.HuN-Cafi
The.Color.of.Money.1986.BDRip.XviD.HuN-BAttila85
Assault.on.Precinct.13.2005.Hun.BDRip.XviD-Triad
A.Perfect.World.1993.BDRiP.XviD.HuN-MicroBit
Anyahajó - Repülőtér a vízen
Anyahajó - Irány a veszélyes övezet!
Le.Marquis.2011.CUSTOM.DVDRip.XviD.Hungarian-HuSync
The.Delta.Force.1986.BluRay.720p.2xHun.DTS.x264-DenZo
From.Dusk.Till.Dawn.1996.720p.BluRay.DD5.1.x264.HuN-AMBiLiGHT
House.of.Sand.and.Fog.2003.720p.HDTV.READ.NFO.ENG.x264.HuN-TRiNiTY
Batman.Year.One.2011.1080p.Bluray.HUN.ENG.DTS.x264-easyNFO
Batman.Under.the.Red.Hood.2010.1080p.BluRay.HUN.ENG.x264-easyNFO
Csalók és csalik
Mona Lisa
Isten hozott a babaházban
Superman.Batman.Public.Enemies.2009.1080p.BluRay.HUN.ENG.x264-easyNFO
Tigris hazatér
The.Delta.Force.1986.Custom.2xHUN.BDRip.Xvid-DenZo
Another.Day.2001.TVRip.XviD.Hun-SLN
Apollo 13
Idovonal.2003.720p.BluRay.x264.HUN-FOX
Unforgiven.1992.CUSTOM.BDRiP.XviD.HUN-muxuj
Holly Hobbie és barátai - Igaz barátok mindörökké
Paraziták
Senso '45
A muzsika hangja - Városmajori Szabadtéri Színpad előadása
Raszputyin - Ördög az emberben
Shop-show 720p
Reservoir.Dogs.1992.Bluray.1080p.DUBBED.DTS-HR.6.1.HUN.dxva.x264-Girnyo
The.Legend.of.1900.1998.BluRay.1080p.DTS.x264-CHD
Egyszer volt - A berlini fal
A békaherceg
Az Őrzők legendája 3D 1080p
Szerelem a Fehér Házban
Trasgredire
A nagy kiruccanás
Egy negyvenes nő és a flört
Ivanhoe
Top.Gun.1986.BDRip.XviD.Hun-Predator
G.I.Jane.1997.BDRip.Xvid.Hun-PpB
Category.6.Day.Of.Destruction.2004.DVDRip.DUAL.AUDiO.HUN.XViD-SVCDTeaM
The Door
Hajléktalanul a Harvardon
Nagy vörös kutya
Bátyám, a főcserkészlány
Mindenkit hazavárnak
John Fitzgerald Kennedy
Csók, anyu
Jákob rabbi kalandjai BD25
Wagner - Der Ring des Nibelungen
Kickboxer 1080p
Deja.Vu.2006.RETAiL.BDRiP.XViD.HuN-PpB
Caligula - The Untold Story
Az uralkodó harcosai
Splice.2009.1080p.BluRay.DTS.x264.Hun-Sadu
Splice.2009.720p.BluRay.DTS.x264.Hun-Sadu
Despicable.Me.Home.Makeover.Mini.Movie.2010.720p.Bluray.x264-HDEX
Pumpkinhead - A bosszú démona
Hidegvérrel
Halálos fegyver 3
Gyilkos játékok
Óvakodj a törpétől!
Demolition.Man.1993.BD25.AVC.DTSHD.HUN-HDPre
Kígyóharapás
Lemmy
A függetlenség napja 1080p
Én és a hercegem 3. - Királyi mézeshetek
The.Wind.That.Shakes.the.Barley.2006.720p.HDTV.H.264.DUAL-N&R
Despicable Me 3 Mini-Movies 1080p
Én és a gengszter
Overboard.1987.720p.BluRay.x264.DTS.HUN-N&R
Az aztékok kincse II. - A napisten piramisa
Bolondos dallamok - Tapsi Hapsi gyűjteménye 2.
A gyermek
Mesék a kriptából - Vérbordély
Halálos fegyver 2.
Belle.de.Jour.1976.720p.BluRay.Hun-HDv
Le.Samurai.1967.HUN.DVDRip.Xvid-akela
A.kez.amely.a.bolcsot.ringatja.1992.DVDRip.XviD.HUN-HENTELES
Maborosi
Nyári háborúk 1080p
Russell Peters - Outsourced
Michael.Collins.1996.720p.HDTV.x264.DUAL-N&R
Cobra.1986.BD25.VC-1.DTSHD.HUN-HDPre
Scott.Pilgrim.Vs.the.World.2010.1080p.BluRay.DTS.x264.HUN-HDbox
Sheena, a dzsungel királynője
Scott.Pilgrim.vs.the.World.2010.HUN.BDRip.XviD-HCP
Scott.Pilgrim.Vs.the.World.2010.720p.BluRay.x264.HUN-HDbox
A törvény és Jake Wade
Szerva.Itt.Pofon.Ott.2007.CUSTOM.DVDRip.XviD.Hun-JM
Feltámadás
Apocalypto BD50
Eden.Lake.2008.1080p.BluRay.DTS.x264.Hun-Sadu
Eden.Lake.2008.720p.BluRay.DTS.x264.Hun-Sadu
Eden.Lake.Gyilkos.kilatasok.2008.HUN.BDRip.XviD-HUNDUB
A halott ember levelei
Legend.of.the.Guardians.The.Owls.of.GaHoole.2010.HUN.BDRip.Xvid-Thick
Eden.Lake.2008.HUN.DVDRip.Xvid-Thick
Negybalkez.2001.DVDRip.XviD.HUN-PROGiVAGYOKSZiA
Russell Peters - Two Concerts, One Ticket
Ősz New Yorkban 720p
Pirates.of.the.Caribbean.At.Worlds.End.2007.BD25.VC1.DTS.HUN-HDPre
Az én kicsi pónim
K-19 - Atomcsapda
Predators.2010.720p.RETAiL.BluRay.DTS.Hungarian.x264-WALLE
Pulp Fiction.(1994).BD25.x264.DTSHD.HDHUN-HDPre
The.Sorcerers.Apprentice.2010.720p.RETAiL.BluRay.DTS.Hungarian.x264-WALLE
Április Ruandában
Bölcsesség
Cobra.1986.Bluray.1080p.DUBBED.DTS.HUN.x264-Girnyo
Legend.of.the.Guardians.The.Owls.of.GaHoole.2010.1080p.BluRay.ENG.x264.HuN-TRiNiTY
Serenity.2005.BDRip.XviD.Hun-lencse
Bolondos dallamok - Tapsi hapsi gyüjteménye3.
A szakértő
Hackers.1995.720p.HUN.ENG.HDTV.x264-iND
Les.Rivieres.Pourpres.2.2004.720p.BluRay.DTS.x264.HuN-TRiNiTY
Minion Madness - Banana
Elso.a.szerelem.2005.BDRip.XviD.Hun-lencse
Karate tigris 4. - A szabadság fiai
Toy Story 3 3D 1080p
Greta
White.Palace.1990.HUN.DVDRip.Xvid-ZOLTANHEV
Tapló Télapó
Hétszilvafa
Okostojás
Bon Jovi - Live at Madison Square Garden 720p
Csunking Expressz
Kick-Ass.2010.1080p.BluRay.DTS.x264.Hun-Sadu
Kick-Ass.2010.720p.BluRay.DTS.x264.Hun-Sadu
Rossz.tarsasag.2002.HUN.DVDRip.XviD-capuletto
Underworld.Evolution.2006.BluRay.1080p.x264.DTS.HuN-BoNo
London
Wonderful.Days.2003.THEATRICAL.HUN.DVDRip.Xvid-ZOLTANHEV
A Vörös Lámpások
Brilliáns csapda
Moszkva Tér
Robin.Hood.Kalandjai.1938.Custom.DVDRip.XviD.Hun-JM
Gengszterek.2002.iNT.DVDRip.XviD.HUN-tHHe
Bound.1996.BluRay.1080p.DUBBED.DTS.HUN.x264-Girnyo
A.kard.mestere.1990.HUN.DVDRip.Xvid-retro
Szezám Utca - Jó Éjt Szezám Utca
Nacho Libre 1080p
Dalai Láma - Együttérzés A boldogság művészete - Nyilvános tanítás
Dalai Láma - Csenrézi (A Szeretet Buddhája) - meghatalmazás és áldás
Dalai Láma - Bevezetés a tibeti buddhizmusba I.
Ne hagyd magad, Pitkin
Dr. Caligari
Die.Hard.1988.READ.NFO.CUSTOM.BDRip.Xvid.Hun-Daw086
The White Stripes - Under Great White Northern Lights
Samsung demo oceanic life 1080p
Tükröm, tükröm...
Pirosszka.2005.HUN.DVDRip.XviD-capuletto
Caddyshack.1980.BluRay.1080p.DUBBED.DTS.HUN.x264-Girnyo
Benjamin közlegény
Ameddig a lábam bírja
A.csend.fogsagaban.1994.Custom.DVDRip.XviD.Hun-lencse
Tutira kamuzunk
Életem
A szex a legjobb diéta
Scooby Doo 3. - Fény,Kamera,Fantom
Bagdadi.tolvaj.Felujitott.v.1940.Dvdrip.Xvid.HUN.CS.H
Rocktabor.2.Extra.Valtozat.2010.DVDRip.XviD.Hun-HDTV
Fullasztó ölelés
Szahara.2005.DVDRip.Xvid.HUN-BiTZoNe
Rocky 1
Tali-Ihantala 1944
Tetsuo I. - Vasember
Lakott sziget 2. - Az összecsapás
Rush.Hour.1998.BluRay.1080p.DUBBED.DTS.HUN.x264-Girnyo
Amerikai.szepseg.1999.BDRip.Xvid.Hun-Daw086
Gladiator 1080p
Történetek a sötét oldalról
A rémkirály
A Notre Dame-i toronyőr
A pajzán Dagobert király
Robin.Hood.2010.UNRATED.Directors.Cut.1080p.BluRay.DTS.Only.x264.HuN-VaLiaNT
Flesh.And.Blood.1985.DVDRip.Xvid.Hun-BTW
Garfield és a hálaadás ünnepe
Csukaországban jártunk
Lakott sziget
Szelek Szárnyán
Transporter.3[2008]DvDrip-aXXo
Vadaszat.Eletre.Halalra.1991.Custom.DVDRip.XviD.Hun-JM
Cimborák - Hegyen-völgyön
Simone.2002.HUN.DVDRip.XviD-capuletto
Cimborák - Nádiszélben
A.keteltu.ember.1962.DVDRip.XviD.HunDub
Gyógymód
A keménymag
Asterix.az.Olimpian.2008.HUN.DVDRip.XviD-capuletto
Gyemantvadaszok.1949.Custom.DVDRip.XviD.Hun-unearth
Az.utolso.bevetes.2005.DVDRip.Xvid.HUN-BiTZoNe
Koncz Zsuzsa Dalok - Találomra
Aludj csak, én álmodom 720p
A grófnő
The.Yes.Men.Fix.The.World.P2P.Edition.2010.Xvid-VODO
Mar.Megint.Egy.Dilis.Amcsi.Film.2001.DVDRip.HunDub.Xvid-Mingan
Csupasz pisztoly 33 1/3 Az utolsó merénylet
Törvénytől sújtva
Plots.With.A.View.2002.DVDRip.Xvid.Hun-BTW
Iron.Man.2.2010.iNT.720p.RETAiL.BluRay.HUN.x264-AiR
Az Emlékezés Pillanata
K-19 - Atomcsapda 720p
A.vadon.szava.1997.Custom.DVDRip.Xvid.Hun-Killer96
Napló gyermekeimnek
Bloodsport.1988.BluRay.720p.DUBBED.DTS.HUN.x264-Girnyo
Woyzeck
A Frozen Flower
Pajzán kísértetek
Párosban Párizsban
Családba nem üt a ménkű
Megállt a vonat
Az.Admiralis.2008.HUN.BDRip.XviD-HUNDUB
Halal.Velenceben.1971.Custom.Hun.DVDrip.xvid.BBM
Haláli fegyver 720p
Magyar népmesék - A királykisasszony cipője
Gyorsan, mint a nyíl
Dr. Bubó - Kérem a következőt! 4.
Saw.VI.2009.720p.BluRay.DTS.x264.HuN-TRiNiTY
Sherlock.Holmes.2009.720p.BluRay.DTS.HUN.x264-ROYALFLUSH
Szederkert 3
A vágy villamosa
Barbárfivérek
Hosszú.forró.nyár.1958.DVDRip.XviD.HUN-TeRaCoD
Kung.Fu.Panda.2008.1080p.BluRay.DTS.x264.HuN-TRiNiTY
The.Prestige.2006.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Mi a csudát tudunk a világról 2. - Le a nyúl üregébe
A Titanic elveszett testvérhajója
Transformers
The.Golden.Compass.2007.BDRip.XviD.Hun-B9R
A Holocaust szemei
Mentőcsapat a kenguruk földjén
Magyar népmesék - A mindent járó malmocska
Human Traffic
Zatoichi's Cane Sword
The.Haunting.Hour.Dont.Think.About.It.2007.CUSTOM.HUN.DVDRIP.XVID-HORRORFREAK
Danielle Steel - A sors kereke
Boldog Születésnapot
56.Csepp.Ver.2007.HUN.DVDRiP.XviD-TheNameless
Lányanya
Miracle.At.St.Anna.2008.DVDRip.Xvid.HunSub-vTk
Sinkó Andrea 3in1 edzésprogram
Blöff 1080p BD50
Terminator.1.1984.1080p.BluRay.x264.HUN.ENG-BiTZoNe
Szépleányok - Az 1985-ös magyar szépségverseny története
Hello Kitty és barátai 4. - A cirkusz a városba jön
Azok a csodálatos férfiak
Bambi
Az Egy története
The.Blind.Side.2009.BDRip.XviD-MegaPlay
A Húsvét-sziget titka
Pofonok.foldje.2004.720p.BluRay.x264.DTS.HUN-N&R
Ichi the Killer-Koroshiya 1
Junior.1994.DVDRip.XviD.Hun-April
Traitor.720p.BluRay.5.1.HUN.5.1.ENG.x264-aNyaM
Kukori és Kotkoda
Szerzetesek a laboratóriumban
Buszkeseg.es.balitelet.2005.BDRip.XviD.HUN-BD
The.Remains.Of.The.Day.1993.Custom.Hun.PAL.DVDR-Joker
Az.ordog.kriptaja.2009.BDRip.XviD.Hun-HDTV
Az ördög maga
A.Felejtes.Bere.2003.HUN.DVDrip.Xvid.AC3.5.1-viner
Knight Rider 2000
Rejtelyek.Tesz-Vesz.varosban.D4.2007.HUN.DVDRip.XviD-TTT
Zatoichi And The Chess Expert
Bizd.a.hackerre.2001.HUN.DVDrip.Xvid.AC3.5.1-viner
A betörés
Bover.szallo.2002.HUN.DVDrip.Xvid.AC3.5.1-viner
Dilis bagázs
Hello, Dolly!
Tengeri farkasok
Szabaditsatok.ki.Willyt.4.A.kaloz-obol.akcio.2010.RETAiL.DVDRip.XviD.Hun-HDTV
Hurrikán
A.verda.horda-Adj.el.vagy.hullj.el!2009.RETAiL.DVDRip.XviD.Hun-HDTV
Az utolsó vacsora
Viva High School Musical Mexico
Danielle Steel - Palomino
Never.Back.Down.2008.720p.Bluray.DTS.x264.HUN-Knight
A gyűrűk Ura 2. - A két torony
Modern Pimpernel
Bűn és bűnhődés
Leaves.Of.Grass.2009.RETAiL.DVDRip.XviD.AC3-ELiTE
A piramisok rejtett titkai
La.Marche.de.l'empereur.2005.720p.BluRay.DTS.x264.Hun-HDv
Leviathan
A máltai sólyom
Halálforgás
U-571.2000.BDRip.XviD.Hun-B9R
Nem félünk a farkastól
Két férfi a városban
Mentőcsapat a kenguruk földjén
Lake.Mungo.2008.DVDRip.XviD-HunSub.CMYK
Lego-Clutch.Powers.kalandjai.2010.RETAiL.DVDRip.XviD.Hun-HDTV
Angyal első látásra
Frailty.2001.BDRip.XviD.HUN-1st
Tibor vagyok, de hódítani akarok
Esthajnalcsillag
Az utolsó esély
Shaun.of.the.Dead.2004.BDRip.XviD.Hun-lencse
Tora! Tora! Tora!
Vrungel Kapitány Kalandjai
Zombieland.2009.720p.BluRay.DTS.x264.HuN-TRiNiTY
Ed Wood
Narnia.Kronikai.-.Az.oroszlan.a.boszorkany.es. a.ruhasszekreny.1988.HUN.DVDRip.XviD.AC3.2.0-Hollow
Mazli.2008.DVDRip.XviD.Hun-SeeDL
A.Leny.II.1998.HUN.DVDRip.XviD.AC3.5.1-Hollow
A.Leny.1995.HUN.DVDRip.XviD.AC3.5.1-Hollow
Farkasok.birodalma.2005.HUN.DVDRip.XviD.AC3.5.1-Hollow
Hé, haver, nyomd a verdát!
Kukori és Kotkoda 2. -Kakasviadal
Az.en.kicsi.ponim.1986.DVDRip.XviD.HUN-TeRaCoD
Chaplin.1992.DVDRip.XviD.Hun-SeeDL
Discovery.Channel - Utcai autóverseny - Egy éjszaka a Földön
Aranyásó - A világ legnagyobb bankrablása
Discovery.Channel - Szexualítás - ahogyan a műsor készült
Moziklip
Stephen.King-A.gyujtogato.1984.Xvid-Gepard
Discovery Channel - A számítógépes játékok története
A.Leny.III.2004.HUN.DVDRip.XviD.AC3.5.1-Hollow
Csernobil - Élet a Holt Zónában
Memento.BDRip.720p.x264.Hun-Optimus
Discovery Channel - Szexualítás - aszexualítás
Discovery Channel - Szexualítás - a monogámián túl
Discovery Channel - Szexulítás - trágár tréfák
Discovery Channel - Szexualítás - nudizmus
Discovery Channel - Szexualítás - terhesség
Discovery Channel - Szexualítás - szexjátékszerek
Discovery Channel - Szexualítás - perverzitás
A szabadság vihara
Gyokerek.1977.DVDRip.XviD.Hun-SeeDL
A szerelem Harley Davidsonon érkezik
My Fair Lady
Joao Magueijo ősrobbanás-elmélete - Discovery Science
Csárdáskirálynő
Nevetséges Napóleon
Osho-Egyedul.az.uton.DvdRip-Ekhion
Twilight zone
Beszterce Ostroma
Egyiptomi hárem hastánc iskola 2
Egyiptomi hárem hastánc iskola - Sinka Viktóriával
Haragban a világgal
A.Felelem.Bere.HUN.DVDRip.Xvid-KotySoft
Eberseg.2007.DVDRip.HUNDUB.XviD.AC3.5.1-Timba
A hét szamuráj
Saw.V.2008.iNT.1080p.BluRay.DTS.Only.x264.HuN-TRiNiTY
Babar
The.Sisterhood.of.the.Traveling.Pants.2.DVDRip.XviD-DiAMOND
The.Chronicles.of.Riddick.2004.iNT.DirCut.720p.BluRay.DTS.x264.HuN-TRiNiTY
Breaking Glass
10000.BC.2008.iNT.720p.BluRay.DTS.x264.HuN-TRiNiTY
Ladányi Tamás Horgásztechnikák kezdőknek és haladóknak
Changeling.2008.iNT.720p.BluRay.DTS.x264.HuN-TRiNiTY
Szegény gazdagok
Emberek a havason
A rózsaszín párduc
Kincskereso.kiskodmon.1973.DVDRip.Xvid.HUN-gABe
Egérmese 3.
Trükkös halál 2.
Barbie - Hollywoodi álom
A.Leny.IV-Az ebredes.2007.HUN.DVDRip.XviD.AC3.2.0-Hollow
Fantozzi tovább tűr
Fantozzi mindenki ellen
Gyula vitéz télen-nyáron
Final Fantasy VII - Dirge of Cerberus
America - Freedom To Fascism
Száguldás a semmibe
Tűz van, babám!
Ivan Csonkin közkatona élete és különleges kalandjai
Bob herceg
Madagascar.Escape.2.Africa.2008.1080p.BluRay.DTS.x264.HUN-TRiNiTY
The.Illusionist.2006.720p.BluRay.HuN.EnG.x264-TRiNiTY
Micimackó -Tavaszolás Zsebibabával
South Park - Nagyobb, hosszabb és vágatlan
A.mehek.titkos.elete.2008.HunDub.DVDRip.XviD.AC3.2.0-SeeDL
The.Rock.1996.iNT.1080p.BluRay.DTS.x264.HuN-TRiNiTY
A Shaolin Kung Fu mítoszai és logikája
Van, aki forrón szereti
Stargate SG-1 - Profile on Daniel Jackson, extra
Stargate SG-1 Secret Files of the SGC - Colonel Jack O'Neill
Seven.Years.in.Tibet.1997.iNT.720p.BluRay.DTS.x264.HuN-TRiNiTY
Jeremiás
A.szivem.erted.RAPes.2001.HUN.DVDRip.Xvid.AC3.5.1-Hollow
Szezám utca - Elmo szeret téged!
Journey.to.the.Center.of.the.Earth.2008.3D.720p.ENG.BluRay.HUN.x264-TRiNiTY
A.hullam.2008.DvdRip.HUN.AC3.XviD-SH
Bibor.Folyok.2.Az.apokalipszis.angyalai.2004.HUN.DVDRiP.XviD-seven
National Geographic - Az a kritikus hat fok
A legyek ura
Tények a vitaminokról
Oltari.Volegeny.1999.DVDRip.x264.HUN-BOSS
Forgószél
The.Accidental.Husband[2008]DvDrip-aXXo
Az elcsatolt területek visszafoglalása
Sicko.2007.HUNSUB.DVDRiP.XviD-PRiM3
Kis Piros Traktor 3. - Az év farmja
Kis Piros Traktor 2. - A repülés
Kis piros traktor 1. - Az aratás
Alfred Hitchcock - A csalás
Ben10 és az Omnitrix titka
Bolondos dallamok - Csőrike és Szilveszter gyűjteménye 1
Bolondos Dallamok - Speedy Gonzales Gyűjteménye 1
Bolondos Dallamok - A Legbolondosabbak5
Bolondos Dallamok - A legbolondosabbak 1
4 Hónap, 3 Hét, 2 Nap
Bolondos Dallamok - Tapsi Hapsi Gyűjteménye 1
A jó, a rossz és a csúf
Jézus Krisztus szupersztár
Bolondos Dallamok - Dodó és Cucu gyűjtemény
Bolondos.Dallamok.A.Legbolondosabbak.2
Bolondos Dallamok - Tapsi Hapsi Gyűjteménye 2.
Pineapple.Express[2008]DvDrip.HunSub-aXXo
Salsa
Az élet nyomában
Montreali.bankrablas.1985.DVDRip.XviD.HUN-Xplosive
The.Mask.1994.iNT.1080p.BluRay.DTS.x264.HuN-TRiNiTY
Zöld hentesek
Revans
Árnyékfeleség
Hofi Géza - Még mindig aktuális
Hofi Géza - 1991. december 31.
A Nagy Csapat 2
Pulp.Fiction.1994.720p.BluRay.DTS.x264.HuN-TRiNiTY
A nagy csapat
Jack
Picasso kalandjai
Leon, a profi
Walt Disney - Karácsonyi Mesék
A Világ 10 Legnagyobb Csalása
A rózsaszín párduc nyomában
Elmo megmenti a karácsonyt
A rózsaszín párduc bosszúja
A rózsaszín párduc újra lecsap
Eszement Freddy
A suttogó
Futurama - The Beast with a Billion Backs
Sex.and.the.City.2008.720p.BluRay.DTS.x264.HuN-TRiNiTY
Acélizom
Állami áruház
Kung.Fu.Panda.2008.720p.BluRay.DTS.x264.HuN-TRiNiTY
Három Férfi és egy Kis Hölgy
Három Férfi és egy Bébi
The.Prince.of.Egypt.1998.720p.HDTV.HuN.EnG.x264-TRiNiTY
Scrat - No Time For Nuts
Earth.2007.720p.BluRay.DTS.x264.HuN-TRiNiTY
Költői szerelem
Zeitgeist.1.and.2.EngDub.HunSub.DVD5.PAL-korszellem.hu
A Gyűrűk Ura - A király visszatér 1080p
Gengszterképző
Hancock.2008.Unrated.720p.BluRay.DTS.x264.HuN-TRiNiTY
Az igazság a Rém rendes családról
Az igazság a Jóbarátokról
A Passió
Máté evangéliuma
Family.Guy.The.Movie.2005.DVDRip.XviD.iNTERNAL-AEN
Budapest.Retro.2.DVDRip.HUNDUB.XviD-Timba
Budapest.retro.1.DVDRip.HUNDUB.XviD-Timba
A Madagaszkár Pingvinjei - Karácsonyi küldetés
Pettson és Findus 3. Szarvasvadászat
A vihar kapujában
Dínó
Antal Imre - Kabarétréfák
Mekk Elek, az ezermester
Zeitgeist 2 - Addendum
Zeitgeist
Micimackó - Tavaszolás zsebibabával
Feketeszakáll szelleme
Az arany bűvöletében
The.Chronicles.of.Riddick.Dark.Fury.2004.RETAIL.DVDRiP.XviD.HUN-DynamicLife
Gyáróriások II. - A BMW
*/
