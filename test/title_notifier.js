describe('TitleNotifier', () => {

  document.title = 'TitleNotifier unit tests';

  var getTitle = () => {
    return document.title;
  }

  var isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  var expectedTitle = (number) => {
    if(!isNumber(number) || number > 0) {
      return '(' + number + ') TitleNotifier unit tests';
    }
    else {
      return 'TitleNotifier unit tests';
    }
  }

  it('should reset', () => {
    titlenotifier.reset();
    titlenotifier.reset();
    expect(getTitle()).toBe(expectedTitle(0));
  });

  it('should add without param', () => {
    titlenotifier.reset();
    titlenotifier.add();
    expect(getTitle()).toBe(expectedTitle(1));
  });

  it('should add with param', () => {
    titlenotifier.reset();
    titlenotifier.add(10);
    expect(getTitle()).toBe(expectedTitle(10));
  });

  it('should sub without param', () => {
    titlenotifier.reset();
    titlenotifier.add(10);
    titlenotifier.sub();
    expect(getTitle()).toBe(expectedTitle(9));
  });

  it('should sub with param', () => {
    titlenotifier.reset();
    titlenotifier.add(10);
    titlenotifier.sub(2);
    expect(getTitle()).toBe(expectedTitle(8));
  });

  it('should sub when param is bigger than total', () => {
    titlenotifier.reset();
    titlenotifier.add(10);
    titlenotifier.sub(20);
    expect(getTitle()).toBe(expectedTitle(0));
  });

  it('should set without param', () => {
    titlenotifier.reset();
    titlenotifier.set();
    expect(getTitle()).toBe(expectedTitle(0));
  });

  it('should set with param', () => {
    titlenotifier.reset();
    titlenotifier.set(30);
    expect(getTitle()).toBe(expectedTitle(30));
  });

  it('should get notifications', () => {
    titlenotifier.reset();
    titlenotifier.set(5);
    expect(titlenotifier.get()).toBe(5);
  });

  it('should get notifications empty', () => {
    titlenotifier.reset();
    expect(titlenotifier.get()).toBe(0);
  });

  it('should set a max value', () => {
    titlenotifier.reset();
    titlenotifier.max(99);
    titlenotifier.set(98);
    titlenotifier.add();
    titlenotifier.add();
    expect(getTitle()).toBe(expectedTitle('99+'));
  });

  it('should set a max value after', () => {
    titlenotifier.reset();
    titlenotifier.set(200);
    titlenotifier.max(99);
    expect(getTitle()).toBe(expectedTitle('99+'));
  });

});