import { decodeCompressedJson, decodeUncompressedJson } from '../sunburst/sunburst-container-utils';

const compressedJson = { captures: [[2018, [1, [24, ['161652', 8], ['192342', 8], ['182041', 8]], [2, ['215346', 1], ['184425', 1], ['123857', 1]], [4, ['105712', 1]], [21, ['150207', 8]], [25, ['145649', 8]], [8, ['100441', 1]], [9, ['195851', 1]], [26, ['235242', 8], ['222435', 8]], [28, ['081227', 8], ['101312', 8]], [10, ['221011', 1]]], [2, [11, ['132245', 9]], [22, ['091704', 3]], [24, ['033244', 3]], [28, ['093742', 3], ['140108', 3]], [27, ['210329', 3], ['204910', 3]], [12, ['191454', 9], ['203344', 14], ['153934', 9]], [13, ['190109', 3], ['155242', 11], ['161336', 11]]], [3, [8, ['075201', 12]], [1, ['152329', 3]], [9, ['132510', 16]], [14, ['182202', 13], ['172358', 13]], [15, ['164446', 13]]], [4, [16, ['095836', 0]], [1, ['165919', 0]], [4, ['044024', 0]], [22, ['180237', 0], ['192323', 0]], [7, ['235512', 0]], [23, ['090442', 0]], [28, ['070835', 0]], [13, ['210410', 0], ['205336', 0]], [14, ['161445', 0]], [15, ['153956', 0]]], [5, [16, ['214905', 0], ['220228', 0]], [1, ['074325', 0]], [2, ['095622', 0]], [6, ['210413', 0]], [23, ['171147', 0], ['130946', 0]], [24, ['000408', 0]], [25, ['030627', 0]], [15, ['151455', 0]], [28, ['144155', 0]], [31, ['203109', 0]]], [6, [16, ['081919', 0]], [2, ['100915', 0]], [19, ['221859', 15], ['200213', 15]], [11, ['083940', 0]], [28, ['222247', 6], ['201208', 6]], [29, ['000409', 6]], [14, ['135128', 0]], [15, ['182954', 0]]], [7, [27, ['093456', 6], ['190916', 6]], [8, ['172031', 6], ['152619', 6]], [26, ['113107', 6]], [3, ['075622', 6]], [7, ['152806', 6]], [24, ['115915', 6], ['120135', 6], ['142536', 6]], [10, ['202826', 6], ['223448', 6]], [11, ['015508', 6], ['201349', 6]], [13, ['004114', 6]], [31, ['200000', 6]]], [8, [16, ['171128', 6]], [17, ['063659', 6]], [20, ['000928', 6], ['151933', 6]], [21, ['171457', 6], ['213729', 6], ['113315', 6]], [7, ['213655', 6]], [8, ['153315', 6]], [9, ['205331', 6]], [10, ['120548', 6], ['102331', 6]], [13, ['070819', 6]]], [9, [11, ['211435', 7]], [9, ['233219', 7]], [8, ['175800', 7]], [25, ['201504', 10]], [7, ['233627', 7]], [13, ['213425', 7]], [14, ['202626', 7]]], [10, [1, ['194423', 10]], [2, ['174749', 10], ['200705', 10], ['023046', 10]], [3, ['052009', 10]], [4, ['201401', 10]], [9, ['193314', 10]], [11, ['145051', 10]], [15, ['030820', 10]], [16, ['160007', 10], ['151039', 10]], [21, ['142515', 2]], [23, ['161253', 2]], [25, ['074243', 2]], [28, ['184251', 2]]], [11, [16, ['084921', 5]], [17, ['072714', 2], ['025141', 2], ['082316', 2]], [19, ['092926', 2], ['183456', 2]], [5, ['043150', 2]], [22, ['001144', 5], ['021929', 5], ['011253', 5]], [1, ['182703', 2]], [24, ['173116', 2]], [25, ['031212', 2]], [10, ['224353', 2]], [27, ['191232', 2]]], [12, [3, ['173648', 5]], [5, ['210145', 4], ['091739', 2]], [6, ['031202', 5]], [9, ['194846', 5]], [10, ['230514', 5]], [11, ['001014', 5]], [15, ['172146', 5], ['224907', 5]], [20, ['045931', 2]], [21, ['222556', 5]], [22, ['095903', 5]], [24, ['181728', 2]], [27, ['121421', 2]], [28, ['175712', 2]]]]], hashes: ['eWJyT8qNxSL8PZ1PoY31gQ==', 'eWZzSsuNRSL8PYxPrQ1VjQ==', 'eGJzT8qNQSL9LY1NJV3FgQ==', 'eWJzTsqNxSr8PZ1fpw3diQ==', 'NVUxeHbdRKP0IbTD9dTXgw==', 'eWJzT8qNRSL8PZ1vJV39hQ==', 'eWJzTsuJxSr8PY1HpV3dkQ==', 'eGJyT8qNQSL8PYxNpd3FhQ==', 'eWJzSsuNRSL8PY1PpQ3ViQ==', 'eWJzTsqNxSL8PY1PpU3ViQ==', 'eGJzTsqNQSL9PYxNpd31gQ==', 'eWJzTsqNxSr9fY1Pp0nVgQ==', 'eWJzT8qNwSL8PZ1PrU31gQ==', 'eGJzT8qNQSr8PY1fLw3VhQ==', 'eWJzTsKNxSr8PY1Pp03dgQ==', 'eWJyT8qNxSK8PZxPoU39gQ==', 'eWJzT8qNwSL8PZ1PLQ39gQ=='], status: 'COMPLETE', total_captures: 150 };
const uncompressedJson = { captures: [['20180108100441', 'eWZzSsuNRSL8PYxPrQ1VjQ=='], ['20180102215346', 'eWZzSsuNRSL8PYxPrQ1VjQ=='], ['20180531203109', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20181227121421', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180227210329', 'eWJzTsqNxSr8PZ1fpw3diQ=='], ['20181205210145', 'NVUxeHbdRKP0IbTD9dTXgw=='], ['20181122001144', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20180102184425', 'eWZzSsuNRSL8PYxPrQ1VjQ=='], ['20180414161445', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180724115915', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180816171128', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180711015508', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20181206031202', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20181117072714', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180914202626', 'eGJyT8qNQSL8PYxNpd3FhQ=='], ['20180121150207', 'eWJzSsuNRSL8PY1PpQ3ViQ=='], ['20180228093742', 'eWJzTsqNxSr8PZ1fpw3diQ=='], ['20181211001014', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20180124161652', 'eWJzSsuNRSL8PY1PpQ3ViQ=='], ['20180516214905', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20181122021929', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20180109195851', 'eWZzSsuNRSL8PYxPrQ1VjQ=='], ['20180616081919', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180724120135', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180212191454', 'eWJzTsqNxSL8PY1PpU3ViQ=='], ['20181205091739', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20181221222556', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20181228175712', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20181124173116', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20181011145051', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20180628222247', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180228140108', 'eWJzTsqNxSr8PZ1fpw3diQ=='], ['20181215172146', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20180821171457', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20181015030820', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20180810120548', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180711201349', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180707152806', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180820000928', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180213190109', 'eWJzTsqNxSr8PZ1fpw3diQ=='], ['20180820151933', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180506210413', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180222091704', 'eWJzTsqNxSr8PZ1fpw3diQ=='], ['20180913213425', 'eGJyT8qNQSL8PYxNpd3FhQ=='], ['20180128081227', 'eWJzSsuNRSL8PY1PpQ3ViQ=='], ['20181105043150', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20181002174749', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20181209194846', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20180401165919', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180703075622', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180807213655', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180124192342', 'eWJzSsuNRSL8PY1PpQ3ViQ=='], ['20181021142515', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180516220228', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180404044024', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180227204910', 'eWJzTsqNxSr8PZ1fpw3diQ=='], ['20181009193314', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20181122011253', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20180813070819', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180213155242', 'eWJzTsqNxSr9fY1Pp0nVgQ=='], ['20181215224907', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20180422180237', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180413210410', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180502095622', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20181110224353', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180821213729', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180211132245', 'eWJzTsqNxSL8PY1PpU3ViQ=='], ['20180708172031', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180925201504', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20180422192323', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180102123857', 'eWZzSsuNRSL8PYxPrQ1VjQ=='], ['20180821113315', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180628201208', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180524000408', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180528144155', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20181210230514', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20180602100915', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20181224181728', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180615182954', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180308075201', 'eWJzT8qNwSL8PZ1PrU31gQ=='], ['20180104105712', 'eWZzSsuNRSL8PYxPrQ1VjQ=='], ['20181004201401', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20180314182202', 'eGJzT8qNQSr8PY1fLw3VhQ=='], ['20181025074243', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180128101312', 'eWJzSsuNRSL8PY1PpQ3ViQ=='], ['20180810102331', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180708152619', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20181220045931', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180413205336', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20181116084921', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20181028184251', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20181002200705', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20180907233627', 'eGJyT8qNQSL8PYxNpd3FhQ=='], ['20181222095903', 'eWJzT8qNRSL8PZ1vJV39hQ=='], ['20180724142536', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180710202826', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20181119092926', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180124182041', 'eWJzSsuNRSL8PY1PpQ3ViQ=='], ['20180713004114', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20181002023046', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20180726113107', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20181117025141', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180909233219', 'eGJyT8qNQSL8PYxNpd3FhQ=='], ['20180629000409', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180727093456', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20181101182703', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180407235512', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20181016160007', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20180808153315', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180126235242', 'eWJzSsuNRSL8PY1PpQ3ViQ=='], ['20180301152329', 'eWJzTsqNxSr8PZ1fpw3diQ=='], ['20181001194423', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20180315164446', 'eGJzT8qNQSr8PY1fLw3VhQ=='], ['20180515151455', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180611083940', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180213161336', 'eWJzTsqNxSr9fY1Pp0nVgQ=='], ['20181127191232', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20181117082316', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180817063659', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180727190916', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20181016151039', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20180423090442', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180110221011', 'eWZzSsuNRSL8PYxPrQ1VjQ=='], ['20180416095836', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180314172358', 'eGJzT8qNQSr8PY1fLw3VhQ=='], ['20180911211435', 'eGJyT8qNQSL8PYxNpd3FhQ=='], ['20180126222435', 'eWJzSsuNRSL8PY1PpQ3ViQ=='], ['20180525030627', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180224033244', 'eWJzTsqNxSr8PZ1fpw3diQ=='], ['20180212203344', 'eWJzTsKNxSr8PY1Pp03dgQ=='], ['20180523171147', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180619221859', 'eWJyT8qNxSK8PZxPoU39gQ=='], ['20180731200000', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180212153934', 'eWJzTsqNxSL8PY1PpU3ViQ=='], ['20180309132510', 'eWJzT8qNwSL8PZ1PLQ39gQ=='], ['20180619200213', 'eWJyT8qNxSK8PZxPoU39gQ=='], ['20180428070835', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20181125031212', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180125145649', 'eWJzSsuNRSL8PY1PpQ3ViQ=='], ['20180710223448', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20180501074325', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20181023161253', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20180415153956', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180908175800', 'eGJyT8qNQSL8PYxNpd3FhQ=='], ['20180523130946', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180614135128', 'eWJyT8qNxSL8PZ1PoY31gQ=='], ['20180809205331', 'eWJzTsuJxSr8PY1HpV3dkQ=='], ['20181003052009', 'eGJzTsqNQSL9PYxNpd31gQ=='], ['20181119183456', 'eGJzT8qNQSL9LY1NJV3FgQ=='], ['20181203173648', 'eWJzT8qNRSL8PZ1vJV39hQ==']], status: 'COMPLETE', total_captures: 150 };

const uncompressedResult = decodeUncompressedJson(uncompressedJson);
const compressedResult = decodeCompressedJson(compressedJson);

uncompressedResult.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
compressedResult.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

test('uncompress simhash sorted response', () => {
  expect(uncompressedResult).toEqual(compressedResult);
});
