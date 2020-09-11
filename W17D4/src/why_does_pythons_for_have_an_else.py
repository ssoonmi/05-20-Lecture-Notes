'''
q: why_does_pythons_for_have_an_else?
a: to identify fruitless loops; the break statenent skips over the else block
'''
tests = (7, 11)

for test in tests:
  print(f"\nsearching for {test}...\n")
  try:
    for i in range(10):
      print(i, end='.')
      if i == test:
        print(f"found {test}\n")
        break
    else:
      raise Exception(f"ERROR: {test} was not found!")

    print(f"everything's good - {test} was found")

  except Exception as e:
    print('EXCEPTION')
    print(e)

  finally:
    print(f'\nend of {test} search\n')
